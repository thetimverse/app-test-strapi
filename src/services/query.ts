import {
    QueryClient
} from '@tanstack/react-query'

const queryClient = new QueryClient();

export type StrapiResponse<D = unknown> = {
    data: D
}

export default queryClient