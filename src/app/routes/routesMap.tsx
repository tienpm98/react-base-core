import React, { lazy } from 'react'
import { Redirect } from 'react-router'
import { IRoute } from 'models/IRoute'

import Dashboard from 'pages/Dashboard'

export const PATH_NAME = {
	ROOT: '/',
	ERROR_404: '/404',
	DASHBOARD: '/dashboard',
}

const Error404View = lazy(() => import('containers/ErrorBoundary'))

const routesMap: IRoute[] = [
	{
		exact: true,
		path: PATH_NAME.ROOT,
		component: () => <Redirect to={PATH_NAME.DASHBOARD} />,
	},
	{
		exact: true,
		path: PATH_NAME.ERROR_404,
		component: Error404View,
	},

	{
		exact: true,
		path: PATH_NAME.DASHBOARD,
		component: Dashboard,
	},

	{
		path: '*',
		routes: [
			{
				component: () => <Redirect to={PATH_NAME.ERROR_404} />,
			},
		],
	},
]

export default routesMap
