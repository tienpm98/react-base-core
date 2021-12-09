import '@babel/polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { store } from 'store'
import Application from './app/Application'

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
	document.getElementById('root')
)
