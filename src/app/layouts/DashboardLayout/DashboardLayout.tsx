import React, { FC } from 'react'
import ErrorBoundary from 'containers/ErrorBoundary'

const DashboardLayout: FC = ({ children }) => (
	<>
		<ErrorBoundary>{children}</ErrorBoundary>
	</>
)

export default DashboardLayout
