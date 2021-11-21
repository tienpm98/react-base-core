import { IRoute } from 'models/IRoute'
import React, { FC, Fragment, Suspense } from 'react'
import { Route, Switch } from 'react-router'

import routesMap from './routesMap'

const renderRoutes = (routes: IRoute[]) => {
	return (
		<>
			{routes ? (
				<Suspense fallback={<div />}>
					<Switch>
						{routes.map((route: IRoute, idx: number) => {
							const Layout = route.layout || Fragment
							const Component = route.component
							return (
								<Route
									key={`routes-${idx}`}
									path={route.path}
									exact={route.exact}
									render={(props) => (
										<Layout>
											{route.routes ? (
												renderRoutes(route.routes)
											) : (
												<Component {...props} />
											)}
										</Layout>
									)}
								/>
							)
						})}
					</Switch>
				</Suspense>
			) : null}
		</>
	)
}

const Routes: FC = () => {
	return renderRoutes(routesMap)
}

export default Routes
