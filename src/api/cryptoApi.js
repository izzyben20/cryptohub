import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '91ccdfe215mshbac82b34c5ae056p1e5782jsna597d8b6233c'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
        getExchanges: builder.query({
            query: () => createRequest('coin/Qwsogvtv82FCd/exchanges'),
        })
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;