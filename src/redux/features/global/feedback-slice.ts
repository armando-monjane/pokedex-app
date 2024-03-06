import { Slice, createSlice, AsyncThunk, PayloadAction } from "@reduxjs/toolkit";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, never>;

type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;

export interface FeedbacksState {
    isLoading: boolean;
    errorMessage: string;
}

const initialState: FeedbacksState = {
    isLoading: false,
    errorMessage: "",
};

/**
 * Redux slice for feedbacks state management.
 * @name feedbacks
 * @type {Slice}
 */
export const feedbacks: Slice = createSlice({
    name: "feedbacks",
    initialState,
    reducers: {
        setErrorMessage: (state: FeedbacksState, action: PayloadAction<string>) => {
            state.errorMessage = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addMatcher(
                (action: PendingAction) => action.type.endsWith("/pending"),
                (state) => {
                    state.isLoading = true;
                    state.errorMessage = "";
                }
            )
            .addMatcher(
                // matcher for rejected action
                (action: RejectedAction) => action.type.endsWith("/rejected"),
                (state, action: PayloadAction<{
                    data: {
                        message: string;
                    };
                }>) => {
                    state.isLoading = false;
                        state.errorMessage = action?.payload?.data?.message || "Ooops something went wrong";
                }
            )
            // matcher for fulfilled action
            .addMatcher<FulfilledAction>(
                (action: FulfilledAction) => action.type.endsWith("/fulfilled"),
                (state) => {
                    state.isLoading = false;
                }
            );
    },
});

export const {
    setErrorMessage,
    setSuccessMessage,
} = feedbacks.actions;
export default feedbacks.reducer;
