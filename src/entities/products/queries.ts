import {useQuery} from "@tanstack/react-query";
import api from "../../services/api.ts";
import {Category, Product} from "./types.ts";
import {StrapiResponse} from "../../services/query.ts";

export const useGetProductsQuery = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: () => {
            return api
                .get<StrapiResponse<Product[]>>('/products?populate=*')
                .then((response) => {
                    return response.data
                })
        }
    })
}

export const useGetProductQuery = ( id : Product['id']) => {
    return useQuery({
        queryKey: ['products', id],
        queryFn: () => {
            return api
                .get<StrapiResponse<Product>>(`/products/${id}?populate=*`)
                .then((response) => {
                    return response.data
                })
        }
    })
}

export const useGetCategoriesQuery = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => {
            return api
                .get<StrapiResponse<Category[]>>('/categories?populate=*')
                .then((response) => {
                    return response.data
                })
        }
    })
}
export const useGetCategoryQuery = ( id : Category['id']) => {
    return useQuery({
        queryKey: ['categories', id],
        queryFn: () => {
            return api
                .get<StrapiResponse<Category>>(`/categories/${id}?populate[products][populate]=image`)
                .then((response) => {
                    return response.data
                })
        }
    })
}
