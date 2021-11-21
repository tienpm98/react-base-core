import { USER_ROLE } from 'constants/userRole'
import React,{ FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { PATH_NAME } from './routesMap'

type IProps = {
	requireRoles: string[] | []
}

const RoleRoute: FC<IProps> = ({ children, requireRoles = [] }) => {
	const history = useHistory()
	const role = USER_ROLE.ADMIN

	useEffect(() => {
		if (!role || requireRoles.length === 0) return

		const checkRole = requireRoles.includes(role)
		if (!checkRole) {
			history.replace(PATH_NAME.ROOT)
		}
	}, [history, role, requireRoles])

	return <>{children}</>
}

export default RoleRoute
