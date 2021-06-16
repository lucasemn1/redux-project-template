import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import sagaMiddleware from "../sagas";
import loadUserSaga from "../sagas/auth/loadUser";

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(loadUserSaga);

export default store;