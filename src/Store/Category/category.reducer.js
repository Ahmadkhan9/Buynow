import { USER_ACTION } from "./category.types"
const INITIAL_STATE = {
    categoriesMap : {}
}
export const categoryReducer = (state = INITIAL_STATE , action) => {
    const {type , payload} = action
    switch(type){
        case USER_ACTION.SET_CATEGORIES : 
        return {
            categoriesMap : payload
        }
        default :
        return state
    }
}