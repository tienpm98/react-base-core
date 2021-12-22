import React from 'react'
import { FC } from 'react'
import { Redirect } from 'react-router'
import { useAppSelector } from 'hooks/useRedux'
import { PATH_NAME } from 'routes/routesMap'

const AuthGuard: FC = ({ children }) => {
	const { isAuth } = useAppSelector((state) => state.authenticationReducer)
	return isAuth ? <>{children}</> : <Redirect to={PATH_NAME.LOGIN} />
}

export default AuthGuard
