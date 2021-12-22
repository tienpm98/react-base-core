import React from 'react'
import styled from 'styled-components'

const Cell: React.FC = ({ children }) => {
	return <Container>{children}</Container>
}

const Container = styled.td`
	padding: 8px;
	text-align: left;
`

export default Cell
