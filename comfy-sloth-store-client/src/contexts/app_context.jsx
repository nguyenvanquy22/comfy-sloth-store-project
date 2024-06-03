import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/app_reducer'

import {
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN,
} from "../actions"


const initialState = {
    isSidebarOpen: false
}

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN })
    }

    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE })
    }

    return (
        <AppContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}
