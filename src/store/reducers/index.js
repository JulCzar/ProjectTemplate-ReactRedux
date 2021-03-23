import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'

import history from '~/routes/history'
import auth from '~/store/reducers/auth'

const router = connectRouter(history)

export default combineReducers({ auth, router })