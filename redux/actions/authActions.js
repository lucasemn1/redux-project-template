import { REQUEST_LOAD_USER, ERROR_LOAD_USER, LOADING_USER, SUCCESS_LOAD_USER } from "./constants/auth";

export function requestLoadUser(username) {
    return {
        type: REQUEST_LOAD_USER,
        payload: { username }
    }
}

export function loadingUser() {
    return {
        type: LOADING_USER,
    }
}

export function successLoadUser(user) {
    return {
        type: SUCCESS_LOAD_USER,
        payload: user,
    }
}

export function errorLoadUser() {
    return {
        type: ERROR_LOAD_USER,
    }
}