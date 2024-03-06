import React, { useEffect, useState } from "react";

import { useGetTypeQuery } from "@services/pokemon";
import DataGrid from "@components/atoms/DataGrid";
import { Pokemon } from "@utils/types/pokemon";

interface PokemonTypeListSectionProps {
    type: string;
}

const PokemonTypeListSection: React.FC<PokemonTypeListSectionProps> = ({
    type,
}) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(20);

    const { data } = useGetTypeQuery(type, {
        skip: !type,
    }) as {
        data: {
            pokemon: {
                pokemon: Pokemon;
            }[];
        };
    };

    useEffect(() => {
        if (data) {
            setPokemons(data.pokemon.map((item) => item.pokemon));
        }
    }, [data]);

    return (
        <DataGrid
            data={pokemons}
            count={pokemons.length}
            limit={limit}
            page={page}
            clientSidePagination
            onRowsPerPageChange={(event) => {
                setPage(0);
                setLimit(parseInt(event.target.value, 10));
            }}
            onPageChange={(_, value) => setPage(value)}
        />
    );
};

export default PokemonTypeListSection;
