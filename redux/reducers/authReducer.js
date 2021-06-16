import { LOADING_USER, SUCCESS_LOAD_USER, ERROR_LOAD_USER } from "../actions/constants/auth";

const INITIAL_STATE = {
    isLoadingUser: false,
    successLoadUser: false,
    errorLoadUser: false,
    user: null,
}

function isLoadingUser(state) {
    return {
        ...state,
        isLoadingUser: true,
        successLoadUser: false,
        errorLoadUser: false,
    }
}

function successLoadUser(state, payload) {
    return {
        ...state,
        user: payload,
        isLoadingUser: false,
        successLoadUser: true,
        errorLoadUser: false,
    }
}

function errorLoadUser(state) {
    return {
        ...state,
        isLoadingUser: false,
        successLoadUser: false,
        errorLoadUser: true,
    }
}

export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOADING_USER:
            return isLoadingUser(state);

        case SUCCESS_LOAD_USER:
            return successLoadUser(state, action.payload);

        case ERROR_LOAD_USER:
            return errorLoadUser(state);

        default:
            return state;
    }
}