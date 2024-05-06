import { createAction } from "../../components/Utils/Reducer/reducer.util"
import { USER_ACTION } from "./category.types"

export const setCategoryMap = (categories) => {
    return createAction(USER_ACTION.SET_CATEGORIES , categories)
}