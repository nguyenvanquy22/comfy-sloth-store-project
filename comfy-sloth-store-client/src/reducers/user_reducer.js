import {
    AUTH_BEGIN,
    AUTH_SUCCESS,
    AUTH_ERROR,
    LOG_OUT,
    SIGN_UP_SUCCESS,
    UPDATE_INFO_SUCCESS,
} from "../actions"

const user_reducer = (state, action) => {
    if (action.type === AUTH_BEGIN) {
        return { ...state, auth_load: true }
    }
    if (action.type === AUTH_SUCCESS) {
        const { user, authenticated, token } = action.payload
        return {
            ...state,
            user,
            authenticated,
            token,
            auth_load: false,
            auth_error: {},
        }
    }
    if (action.type === AUTH_ERROR) {
        return { ...state, auth_load: false, auth_error: action.payload }
    }
    if (action.type === LOG_OUT) {
        return {
            ...state,
            user: {},
            authenticated: false,
            token: null,
            auth_load: false,
            auth_error: {},
        }
    }
    if (action.type === SIGN_UP_SUCCESS) {
        return {
            ...state,
            auth_error: {},
        }
    }
    if (action.type === UPDATE_INFO_SUCCESS) {
        return {
            ...state,
            user: action.payload,
            auth_error: {},
        }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default user_reducer