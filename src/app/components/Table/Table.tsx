import React from 'react'
import styled from 'styled-components'

const Table: React.FC = ({ children }) => {
	return (
		<TableContainer>
			<tbody>{children}</tbody>
		</TableContainer>
	)
}

const TableContainer = styled.table`
	border: 1px solid #333;
	border-collapse: collapse;
`

export default Table
