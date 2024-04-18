import { createContext, useState } from "react";

// as actual value you want to access
export const userContext = createContext({
    currentUser : null,
    setCurrentUser : () => null
});
// context provider
export const UserProvider = ({children} )=> {
    const [currentUser , setCurrentUser] = useState(null)
    return <userContext.Provider value={{currentUser , setCurrentUser}}>{children}</userContext.Provider>
}