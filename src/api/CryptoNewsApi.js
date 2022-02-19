import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': '91ccdfe215mshbac82b34c5ae056p1e5782jsna597d8b6233c'
}

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
