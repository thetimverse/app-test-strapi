import {useQuery} from "@tanstack/react-query";
import api from "../../services/api.ts";
import {Product} from "./types.ts";
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
                .get<StrapiResponse<Product[]>>(`/products/${id}?populate=*`)
                .then((response) => {
                    return response.data
                })
        }
    })
}
