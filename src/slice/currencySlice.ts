import { createSlice } from '@reduxjs/toolkit';

export type InitialState = {
    currency: string;
    indicator: string;
};

const initialState: InitialState = {
    currency: 'dollar',
    indicator: 'Курс доллара',
};

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        updateState(state, action) {
            state.currency = action.payload.currency;
            state.indicator = action.payload.indicator;
        },
    },
});

export const getCurrency = ({ currency }: { currency: InitialState }) =>
    currency;
export const { updateState } = currencySlice.actions;
export default currencySlice.reducer;
