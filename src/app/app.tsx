import React, { FC } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'routes/Routes'
import { GlobalStyle } from './global.style'

const App: FC = () => {
	return (
		<Router>
			<GlobalStyle />
			<Routes />
		</Router>
	)
}

export default App
