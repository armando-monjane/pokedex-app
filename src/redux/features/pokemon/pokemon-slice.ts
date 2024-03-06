import { PayloadAction, Slice, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "@utils/types/pokemon";

export interface PokemonState {
    isLoading: boolean;
    selectedPokemon?: Pokemon;
}

const initialState: PokemonState = {
    isLoading: false,
    selectedPokemon: undefined,
};

/**
 * Redux slice for create pokemon state management.
 * @name pokemon
 * @type {Slice}
 */
export const pokemon: Slice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        resetState: () => {
            return initialState;
        },
        setSelectedPokemon: (state, action: PayloadAction<Pokemon>) => {
            state.selectedPokemon = action.payload;
        }
    },
});

export const {
    resetState,
    setSelectedPokemon,
} = pokemon.actions;
export default pokemon.reducer;
