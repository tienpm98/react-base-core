import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes/Routes'
import Auth from 'containers/Auth'
import { GlobalStyle } from './global.style'

const App: FC = () => {
	return (
		<Router>
			<Auth>
				<GlobalStyle />
				<Routes />
			</Auth>
		</Router>
	)
}

export default App
