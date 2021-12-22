import React from 'react'
import { FC } from 'react'
import { Redirect } from 'react-router'
import { PATH_NAME } from 'routes/routesMap'
import { useAppSelector } from 'hooks/useRedux'

const GuestGuard: FC = ({ children }) => {
	const { isAuth } = useAppSelector((state) => state.authenticationReducer)
	
	return isAuth ? <Redirect to={PATH_NAME.ROOT} /> : <>{children}</>
}

export default GuestGuard
