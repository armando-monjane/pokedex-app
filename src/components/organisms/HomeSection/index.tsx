import React, { useState } from "react";

import * as S from "./styles";
import { useGetPokemonsQuery } from "@services/pokemon";
import { Pokemon } from "@utils/types/pokemon";
import AutoComplete from "@components/molecules/AutoComplete";
import DataGrid from "@components/atoms/DataGrid";

const HomeSection = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const { data } = useGetPokemonsQuery({ limit, offset }) as {
    data?: { count: number; results: Pokemon[] };
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setLimit(parseInt(event.target.value, 10));
    setOffset(0);
  };

  const handlePageChange = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
    setPage(newPage);
    setOffset(newPage * limit);
  };

  return (
    <S.ListBox>
      <AutoComplete />

      <DataGrid
        data={data?.results}
        count={data?.count ?? 0}
        limit={limit}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </S.ListBox>
  );
};

export default HomeSection;
