import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './slice/currencySlice';
import { currencyApi } from './api/currencyApi';

const store = configureStore({
    reducer: {
        currency: currencyReducer,
        [currencyApi.reducerPath]: currencyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(currencyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
