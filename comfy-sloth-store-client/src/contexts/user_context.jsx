import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducers/user_reducer'
import { auth_url, users_url } from '../utils/constants'

import {
    AUTH_BEGIN,
    AUTH_SUCCESS,
    AUTH_ERROR,
    LOG_OUT,
    SIGN_UP_SUCCESS,
} from "../actions"

const getLocalStorage = () => {
    let token = localStorage.getItem('token')
    if (token) {
        return JSON.parse(localStorage.getItem('token'))
    } else {
        return null
    }
}

const initialState = {
    user: {},
    isAuthenticated: false,
    token: getLocalStorage(),
    auth_load: false,
    auth_error: false,
}

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const checkLogin = async (username, password) => {
        dispatch({ type: AUTH_BEGIN })
        try {
            const loginReq = { username, password }
            const res = await axios.post(`${auth_url}/login`, loginReq)
            const data = res.data

            dispatch({ type: AUTH_SUCCESS, payload: data.data })
        } catch (error) {
            dispatch({ type: AUTH_ERROR })
        }
    }

    const checkSignup = async (username, password) => {
        try {
            const signupReq = { username, password }
            const res = await axios.post(`${users_url}`, signupReq)
            const data = res.data
            console.log(data)
            alert("Signup success!")
            // dispatch({ type: SIGN_UP_SUCCESS })
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async () => {
        dispatch({ type: AUTH_BEGIN })
        try {
            const token = state.token
            const res = await axios.post(`${auth_url}/logout`, { token })
            const data = res.data
            dispatch({ type: LOG_OUT, payload: data.data })
        }
        catch (error) {
            console.log(error)
            dispatch({ type: AUTH_ERROR })
        }
    }

    const authenticate = () => {
        let token = state.token
        if (token && token !== 'null') {
            dispatch({ type: AUTH_BEGIN })
            axios.post(`${auth_url}/introspect`, { token })
                .then(res => {
                    const isValid = res.data.data
                    if (!isValid) {
                        const res = axios.post(`${auth_url}/rereshToken`, { token })
                        token = res.data.data.token
                    }
                })
                .then(() => {
                    return axios.get(`${users_url}/user/myInfo`, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    })
                })
                .then(res => {
                    const user = res.data.data
                    const authenticated = true
                    dispatch({ type: AUTH_SUCCESS, payload: { user, authenticated, token } })
                })
                .catch(error => {
                    console.error('There was an error!', error);
                    dispatch({ type: AUTH_ERROR })
                })
        }
    }

    useEffect(() => {
        authenticate()
    }, [])

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(state.token))
    }, [state.token])

    return (
        <UserContext.Provider
            value={{ ...state, checkLogin, checkSignup, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}
