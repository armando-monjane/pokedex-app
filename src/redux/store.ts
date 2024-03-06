import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import pokemonReducer from './features/pokemon/pokemon-slice';
import feedbackSlice from './features/global/feedback-slice';

import { api } from '@services/index';

const reducer = combineReducers({
    [api.reducerPath]: api.reducer,
    pokemon: pokemonReducer,
    feedback: feedbackSlice,
});

export const store = configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
    });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
