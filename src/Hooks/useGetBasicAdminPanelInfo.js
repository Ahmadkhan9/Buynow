import axios from "axios"
import { useQuery } from "react-query"

export const useGetBasicAdminPanelInfo = () => {
    return useQuery({
        queryKey : ['basicAdminPanelInfo'],
        queryFn : () => axios.get('http://localhost:8080/api/v1/adminpanel/getbasicinfo').then(res => res.data)
    })
}