import axios from "axios"
import { useQuery } from "react-query"

export const useGetTopSellingProduct = ()=> {
    return useQuery({
        queryKey : ['topsellingproduct'],
        queryFn : () => axios.get('http://localhost:8080/api/v1/adminpanel/gettopsellingitem').then(res => res.data),
        staleTime : 24 * 60 * 60 * 1000
    })
}