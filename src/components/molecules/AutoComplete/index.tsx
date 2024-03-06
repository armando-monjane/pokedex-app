import React, { useEffect, useMemo, useState } from "react";

import MatAutocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import debounce from "@mui/material/utils/debounce";

import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { RootState, useAppDispatch, useAppSelector } from "@redux/store";

import { Pokemon } from "@utils/types/pokemon";
import {
  useGetPokemonByIdQuery,
  useGetPokemonByNameQuery,
} from "@services/pokemon";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import * as S from "./styles";
import { setSelectedPokemon } from "@redux/features/pokemon/pokemon-slice";
import { FeedbacksState } from "@redux/features/global/feedback-slice";


const AutoComplete = () => {
  const [searchedPokemon, setSearchedPokemon] = useState<Pokemon | null>(null);
  const [search, setSearch] = useState("");

  const { goToPage } = useCustomNavigate();

  const { isLoading } = useAppSelector((state: RootState) => state.feedback as FeedbacksState);
  const dispatch = useAppDispatch();

  const { data: searchedPokemonByName } = useGetPokemonByNameQuery(search, {
    skip: !search || !isNaN(parseInt(search)),
  }) as {
    data: Pokemon;
  };

  const { data: searchedPokemonById } = useGetPokemonByIdQuery(Number(search), {
    skip: !search || isNaN(parseInt(search)),
  }) as {
    data: Pokemon;
  };

  const handleSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearch(value);
      }, 500),
    []
  );

  useEffect(() => {
    if (searchedPokemonByName) {
      setSearchedPokemon(searchedPokemonByName);
    }
  }, [searchedPokemonByName]);

  useEffect(() => {
    if (searchedPokemonById) {
      setSearchedPokemon(searchedPokemonById);
    }
  }, [searchedPokemonById]);

  const handleClick = () => {
    void dispatch(setSelectedPokemon(searchedPokemon));
    searchedPokemon && goToPage(`/pokemon/${searchedPokemon.id}`);
  };

  return (
    <MatAutocomplete
      disablePortal
      id="combo-box-demo"
      getOptionLabel={(option) => option.name}
      options={searchedPokemon ? [searchedPokemon] : []}
      sx={{ width: 300 }}
      loading={isLoading}
      onClick={handleClick}
      filterOptions={(x) =>
        x?.filter(
          (y) =>
            y.name.toLowerCase().includes(search.toLowerCase()) ||
            y.id === Number(search)
        )
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search here"
          placeholder="Eg. Pikachu, or 25"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      onInputChange={(_event, value) => handleSearch(value)}
      renderOption={(props, option: Pokemon) => (
        <li {...props}>
          <S.PokemonListItem onClick={handleClick}>
            <img
              loading="lazy"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${option.id}.png`}
              alt={option.name}
            />
            <Typography variant="overline">{option.name}</Typography>
          </S.PokemonListItem>
        </li>
      )}
    />
  );
};

export default AutoComplete;
