import { ComponentType } from 'react'

type ICommon = {
	path?: string
	exact?: boolean
	guard?:
		| React.LazyExoticComponent<ComponentType<unknown>>
		| ComponentType<unknown>
	component?: any
	saga?: any
	layout?: React.FunctionComponent
	requireRoles?: string[] | []
}

export type IRoute = ICommon & {
	routes?: ICommon[]
}
