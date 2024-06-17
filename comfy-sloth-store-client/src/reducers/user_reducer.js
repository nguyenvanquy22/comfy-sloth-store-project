import { useNavigate } from "react-router-dom"
import {
    AUTH_BEGIN,
    AUTH_SUCCESS,
    AUTH_ERROR,
    LOG_OUT,
    SIGN_UP_SUCCESS,
} from "../actions"

const user_reducer = (state, action) => {
    if (action.type === AUTH_BEGIN) {
        return { ...state, auth_load: true }
    }
    if (action.type === AUTH_SUCCESS) {
        const { user, authenticated, token } = action.payload
        return {
            ...state,
            user: user,
            authenticated: authenticated,
            token: token,
            auth_load: false,
            auth_error: false,
        }
    }
    if (action.type === AUTH_ERROR) {
        return { ...state, auth_load: false, error: true }
    }
    if (action.type === LOG_OUT) {
        return {
            ...state,
            user: {},
            authenticated: false,
            token: null,
            auth_load: false,
            auth_error: false,
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default user_reducer