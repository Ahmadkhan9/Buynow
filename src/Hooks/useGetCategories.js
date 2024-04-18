import axios from 'axios'
import { useQuery} from 'react-query'

export const useGetCategories = ()=> {
    return useQuery({
        queryFn : ()=> axios.get('http://localhost:8080/api/v1/categories/get-all-categories').then(res => res.data),
        queryKey : ['getcategories']
    })
}