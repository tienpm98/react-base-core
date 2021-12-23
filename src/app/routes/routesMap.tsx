import React, { lazy } from 'react'
import { Redirect } from 'react-router'
import { IRoute } from 'models/IRoute'
import GuestGuard from 'guards/GuestGuard'

import Dashboard from 'pages/Dashboard'
import DashboardLayout from 'layouts/DashboardLayout'
import { USER_ROLE } from 'constants/userRole'

export const PATH_NAME = {
	ROOT: '/',
	ERROR_404: '/404',
	LOGIN: '/login',
	DASHBOARD: '/dashboard',
}

const Error404View = lazy(() => import('containers/ErrorBoundary'))
const Login = lazy(() => import('pages/Login'))

const routesMap: IRoute[] = [
	{
		exact: true,
		path: PATH_NAME.ROOT,
		component: () => <Redirect to={PATH_NAME.DASHBOARD} />,
	},

	{
		exact: true,
		path: PATH_NAME.LOGIN,
		guard: GuestGuard,
		component: Login,
	},
	{
		exact: true,
		path: PATH_NAME.ERROR_404,
		component: Error404View,
	},

	{
		path: PATH_NAME.ROOT,
		layout: DashboardLayout,
		routes: [
			{
				exact: true,
				path: PATH_NAME.DASHBOARD,
				component: Dashboard,
				requireRoles: [USER_ROLE.ADMIN],
			},
			{
				component: () => <Redirect to={PATH_NAME.ERROR_404} />,
			},
		],
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
