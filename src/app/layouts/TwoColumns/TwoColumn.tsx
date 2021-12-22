import React, { ReactNode } from 'react'
import styled from 'styled-components'

type TwoColumnType = {
	left: ReactNode
	content: ReactNode
}

const TwoColumn: React.FC<TwoColumnType> = ({ left, content }) => {
	return (
		<Wrapper>
			<Left>{left}</Left>
			<Content>{content}</Content>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
`
const Left = styled.div`
	flex: 1;
	max-width: 300px;
`
const Content = styled.div`
	flex: 4;
`

export default TwoColumn
