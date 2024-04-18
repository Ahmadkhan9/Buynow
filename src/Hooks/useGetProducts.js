import axios from 'axios'
import {useQuery} from 'react-query'
const useGetProducts = () => {
    return useQuery({
        queryFn : () => axios.get('http://localhost:8080/api/v1/product/get-products').then(res => res.data),
        queryKey : ['getproduct'],
        staleTime :  24 * 60 * 60 * 1000
    })
}

export default useGetProducts