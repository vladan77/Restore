import { createApi } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../app/models/product";
import { baseQueryWithErrorHandling } from "../../app/api/baseApi";

export const catalogApi = createApi({
    reducerPath: "catalogApi",
    baseQuery: baseQueryWithErrorHandling,
    // baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:5001/api" }),
    endpoints: (builder) => ({
        fetchProducts: builder.query<Product[], void>({
            query: () => ({url:'products'})
        }),
        fetchProductDetails: builder.query<Product, number>({  
            query: (productId) =>`products/${productId}`
        })
    })
});

export const { useFetchProductsQuery, useFetchProductDetailsQuery } = catalogApi;