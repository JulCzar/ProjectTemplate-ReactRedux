import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleWare from 'redux-saga'

import history from '~/routes/history'
import reducer from '~/store/reducers'
import rootSaga from '~/store/sagas'

const sagaMiddleware = createSagaMiddleWare()
const dispatchActions = routerMiddleware(history)
const locationChangerAction = connectRouter(history)

const routerState = locationChangerAction(reducer)
const composer = applyMiddleware(sagaMiddleware, dispatchActions)

const store = createStore(routerState, composer)

sagaMiddleware.run(rootSaga)

export default store
