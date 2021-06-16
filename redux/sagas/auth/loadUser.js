import { call, put, takeLatest } from 'redux-saga/effects'
import { REQUEST_LOAD_USER } from '../../actions/constants/auth';
import GithubUserService from '../../../services/GithubUserService';
import {
    loadingUser,
    successLoadUser,
    errorLoadUser
} from '../../actions/authActions';

async function fetchUser(username) {
    return await new GithubUserService().getOne(username);
}

function* loadUser(action) {
    try {
        yield put(loadingUser());
        const { data } = yield call(fetchUser, action.payload.username);
        yield put(successLoadUser(data));
    } catch (e) {
        yield put(errorLoadUser());
    }
}

function* loadUserSaga() {

  yield takeLatest(REQUEST_LOAD_USER, loadUser);
}

export default loadUserSaga;