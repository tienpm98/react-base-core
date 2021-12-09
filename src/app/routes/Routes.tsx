import { IRoute } from 'models/IRoute'
import React from 'react'
import { FC, Fragment, Suspense } from 'react'
import { Route, Switch } from 'react-router'
import RoleRoute from './RoleRoute'
import routesMap from './routesMap'

const renderRoutes = (routes: IRoute[]) => {
	return (
		<>
			{routes ? (
				<Suspense fallback={<div />}>
					<Switch>
						{routes.map((route: IRoute, idx: number) => {
							const Guard = route.guard || Fragment
							const Layout = route.layout || Fragment
							const Component = route.component
							const requireRoles = route.requireRoles || []

							return (
								<Route
									key={`routes-${idx}`}
									path={route.path}
									exact={route.exact}
									render={(props: any) => (
										<Guard>
											<Layout>
												{route.routes ? (
													renderRoutes(route.routes)
												) : (
													<RoleRoute requireRoles={requireRoles}>
														<Component {...props} />
													</RoleRoute>
												)}
											</Layout>
										</Guard>
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
