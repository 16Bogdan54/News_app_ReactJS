import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {getData} from "@/hooks/utils";
import {data} from "autoprefixer";
import axios from "axios";

interface IResponse<T> {
    status: string;
    response: T;
}

export const useDataFetch = <T>(url: string, queryKey: string):IResponse<T> => {
    const {
        status,
        data: response
    } = useQuery<T>({
        queryKey: [queryKey],
        gueryFn: () => axios.get<T>(url)
    })

    return {status, response}
}