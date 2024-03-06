import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import EyeIcon from "@mui/icons-material/Visibility";

import { useCustomNavigate } from "@hooks/useCustomNavigate";
import { Pokemon } from "@utils/types/pokemon";

interface DataGridProps {
    count: number;
    data?: Pokemon[];
    limit: number;
    page: number;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => void;
    clientSidePagination?: boolean;
}

const DataGrid: React.FC<DataGridProps> = ({
    data,
    limit,
    page,
    onRowsPerPageChange,
    onPageChange,
    count,
    clientSidePagination,
}) => {
    const [filterText, setFilterText] = useState("");
    const { goToPage } = useCustomNavigate();

    if (!data) {
        return <div>Loading...</div>;
    }

    const getDataToList = () => {
        if (!clientSidePagination) {
            return !filterText
                ? data
                : data.filter((pokemon: Pokemon) =>
                    pokemon.name.toLowerCase().includes(filterText.toLowerCase())
                );
        }

        if (!filterText) return data.slice(page * limit, page * limit + limit);

        const filteredData = data.filter((pokemon: Pokemon) =>
            pokemon.name.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filteredData.length <= limit) {
            return filteredData;
        } else {
            return filteredData.slice(page * limit, page * limit + limit);
        }
    };

    const filteredItems = getDataToList();

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TextField
                id="standard-basic"
                label="Filter by name"
                onChange={(e) => {
                    setFilterText(e.target.value);
                }}
            />
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredItems.map((pokemon: Pokemon) => {
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={pokemon.url.split("/").slice(-2, -1)[0]}
                                >
                                    <TableCell>
                                        {pokemon.url.split("/").slice(-2, -1)[0]}
                                    </TableCell>
                                    <TableCell>
                                        <img
                                            loading="lazy"
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/").slice(-2, -1)[0]
                                                }.png`}
                                            alt={pokemon.name}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="overline">{pokemon.name}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={() =>
                                                goToPage(
                                                    `/pokemon/${pokemon.url.split("/").slice(-2, -1)[0]}`
                                                )
                                            }
                                        >
                                            <EyeIcon color="primary" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[20, 50]}
                component="div"
                count={count}
                rowsPerPage={limit}
                page={page}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
            />
        </Paper>
    );
};

export default DataGrid;
