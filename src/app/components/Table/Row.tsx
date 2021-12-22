import React from 'react'
import styled from 'styled-components'

const Row: React.FC = ({ children }) => {
	return <Container>{children}</Container>
}

const Container = styled.tr`
	padding: 8px;
	border: 1px solid #ddd;
	border-collapse: collapse;
`

export default Row
