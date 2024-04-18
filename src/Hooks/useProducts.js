import axios from "axios"
import { useMutation , useQueryClient} from "react-query"

const useProduct = () => {
    const Query = useQueryClient()
    return useMutation({
        mutationFn : (data)=> axios.post('http://localhost:8080/api/v1/product/upload-product' , data).then(res => res.data),
        mutationKey : ['setProduct'],
        onSuccess  : ()=> {
            Query.invalidateQueries(['getproduct'])
        }
    })
}

export default useProduct