import axios from "axios"
import { useMutation } from "react-query"

const useSignUp =  () => {
return  useMutation({
    mutationKey : ["signup"],
        mutationFn : (data) => axios.post('http://localhost:8080/api/v1/user/signup', data).then(res => res.data),
        
    })
}

export default useSignUp