import axios from "axios"
import { useQuery } from "react-query"

export const useGetTopSellingProducts = () => {
    return useQuery({
        queryKey : ['topSellingProducts'],
        queryFn : () => axios.get('http://localhost:8080/api/v1/adminpanel/gettopsellingitem').then(res => res.data)
    })
}