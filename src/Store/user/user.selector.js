import { createSelector } from "reselect"

const currentUserSelector = (state)=> state.user

export const currentUser = createSelector(
    [currentUserSelector],
    (user) => user.currentUser
)