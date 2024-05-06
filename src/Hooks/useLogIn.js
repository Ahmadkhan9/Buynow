import axios from "axios"
import { useMutation } from "react-query"
const useLogIn =  () => {
return  useMutation({
        mutationFn : (data) => axios.post('http://localhost:8080/api/v1/user/login', data).then(res => res.data),
        mutationKey : ["login"]
    })
}

export default useLogIn