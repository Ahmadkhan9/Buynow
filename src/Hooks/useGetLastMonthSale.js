import axios from "axios"
import { useQuery } from "react-query"

export const useGetLastMonthSales = ()=>{
    return useQuery({
        queryKey : ['lastMonthSales'],
        queryFn : () => axios.get('http://localhost:8080/api/v1/adminpanel/getlastmonthsales').then(res => res.data)
    })
}