import {createContext, useContext} from "react";

// creating user context and setting the default values
export const UserContext = createContext({user: null,setUser:()=>{}});

// exporting user context provider
export const UserProvider = UserContext.Provider;

// exporting custom hook for user context
export default function useUserContext(){
    return useContext(UserContext);
}