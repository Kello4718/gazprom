import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://65d4882e3f1ab8c63435616a.mockapi.io/chartsData/line/';

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (build) => ({
        getCurrencyData: build.query({
            query: () => 'currency',
        }),
    }),
});

export const { useGetCurrencyDataQuery, useLazyGetCurrencyDataQuery } =
    currencyApi;
