import { put, takeLeading } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import * as actions from '~/store/actions/auth'

const login = function* _login(action) {
	const TEMP_USER = {
		name: 'Username',
		email: 'test@mail.co' 
	}
	
	const TEMP_TOKEN = '123456789abc'

	yield put(actions.loginSuccess(TEMP_USER, TEMP_TOKEN))

	yield put(push('/welcome'))
}

const logout = function* _logout() {
	yield put(actions.logout())

	yield put(push('/logged_out'))
}

const AUTH_SAGA = [
	takeLeading('LOGIN', login),
	takeLeading('LOGOUT', logout)
]

export default AUTH_SAGA