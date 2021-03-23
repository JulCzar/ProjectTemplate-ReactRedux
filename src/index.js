import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Routes from '~/routes'
import Store from '~/store'

import '~/index.css'

const ROOT = document.getElementById('root')

const App = function _App() {
	return (
		<Provider store={Store}>
			<Routes/>
		</Provider>
	)
}

ReactDOM.render(<App/>, ROOT)