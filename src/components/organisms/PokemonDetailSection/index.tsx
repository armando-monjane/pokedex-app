import React from "react";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const pokemonTypesColors = [
    "#A33EA1",
    "#A6B91A",
    "#3B7A9A",
    "#6D7815",
    "#724BC1",
    "#C22E28",
    "#705746",
];

import { Pokemon } from "@utils/types/pokemon";

import * as S from "./styles";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

interface PokemonDetailSectionProps {
    pokemon?: Pokemon
}

const PokemonDetailSection: React.FC<PokemonDetailSectionProps> = ({
    pokemon,
}) => {
    const { goToPage } = useCustomNavigate();

    return (
        <>
            {pokemon && (
                <Grid container>
                    <Grid item xs={12}>
                        <S.ContainerBox>
                            <S.StatsBox>
                                {pokemon.stats.map((stat) => (
                                    <React.Fragment key={stat.stat.name}>
                                        <Typography variant="caption">
                                            {stat.stat.name}: {stat.base_stat}
                                        </Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={(stat.base_stat / 255) * 100}
                                            sx={{
                                                height: 5,
                                                borderRadius: 2,
                                                backgroundColor: "background.paper",
                                            }}
                                        />
                                    </React.Fragment>
                                ))}
                            </S.StatsBox>
                            <S.SpritesBox>
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                                <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                            </S.SpritesBox>
                        </S.ContainerBox>

                        <S.ContainerBox>
                            <S.TypesBox>
                                {pokemon.types.map((type) => (
                                    <Chip
                                        key={type.slot}
                                        label={type.type.name}
                                        onClick={() => goToPage(`/type/${type.type.name}`)}
                                        style={{ backgroundColor: pokemonTypesColors[type.slot] }}
                                    />
                                ))}
                            </S.TypesBox>
                        </S.ContainerBox>
                    </Grid>
                    <Grid item xs={12} md={6}></Grid>
                </Grid>
            )}
        </>
    );
};

export default PokemonDetailSection;
