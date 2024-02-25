import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


    export const shazamApi = createApi({
        reducerPath: 'shazamApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam.p.rapidapi.com/charts',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '1a333dc38cmsh3c4b21d7dd8d519p12040fjsne6225f0454cb');
                return headers;
            },
        }),
        endpoints: (builder) => ({
           getTopCharts: builder.query({ query: () => '/track'}),
        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamApi;