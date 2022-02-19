import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../api/cryptoApi';
import { cryptoNewsApi } from '../api/CryptoNewsApi';

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },  
});

