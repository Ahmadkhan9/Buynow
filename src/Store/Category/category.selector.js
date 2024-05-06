import { createSelector } from "reselect"
 const categoriesMapSelector = (state) => state.categories
export const selectCategories = createSelector(
    [categoriesMapSelector],
    (categories) => categories.categoriesMap
)