import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const INITIAL_STATE = {
    productsToBuy: [],
    totalPrice: 0
}


export const AppContext = createContext(INITIAL_STATE);

export const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

    const values = {
        productsToBuy: state.productsToBuy,
        totalPrice: state.totalPrice,
        dispatch
    }
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}