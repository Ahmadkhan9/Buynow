import axios from "axios"
import { useQuery } from "react-query"

export const useGetAdminDashboardInfo = () => {
    return useQuery({
        queryKey : ['admindashboardinfo'],
        queryFn : () => axios.get('http://localhost:8080/api/v1/adminpanel/getbasicinfo').then(res => res.data),
        staleTime : 24 * 60 * 60 * 1000
    })
}