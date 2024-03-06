import { useEffect, useState } from "react";
import MainTemplate from "@components/templates/MainTemplate";
import { useParams } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "@redux/store";
import PokemonDetailSection from "@components/organisms/PokemonDetailSection";
import { Pokemon } from "@utils/types/pokemon";
import { useGetPokemonByIdQuery } from "@services/pokemon";
import { PokemonState, setSelectedPokemon } from "@redux/features/pokemon/pokemon-slice";
import { useCustomNavigate } from "@hooks/useCustomNavigate";

const PokemonDetailPage = () => {
    const [title, setTitle] = useState('');

    const { id } = useParams<{ id: string }>();

    const { selectedPokemon } = useAppSelector((state: RootState) => state.pokemon as PokemonState);

    const dispatch = useAppDispatch();

    const { goBack } = useCustomNavigate();

    const { data } = useGetPokemonByIdQuery(Number(id ?? 0), {
        skip: !id || !Number(id),
    }) as { data: Pokemon };

    useEffect(() => {
        if (data) {
            setTitle(`#${data.id} - ${data.name}`);
            void dispatch(setSelectedPokemon(data));
        }
    }, [data, dispatch]);

    useEffect(() => {
        return () => {
            void dispatch(setSelectedPokemon(undefined));
        };
    }, [dispatch]);

    return (
        <MainTemplate title={title} withBackButton onGoBack={goBack}>
            <PokemonDetailSection pokemon={selectedPokemon} />
        </MainTemplate>
    );
};

export default PokemonDetailPage;
