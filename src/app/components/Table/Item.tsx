import React from 'react'
import styled from 'styled-components'

type ItemTableType = {
	textColor?: string
}

const ItemTable: React.FC<ItemTableType> = ({ textColor, children }) => {
	return <Item textColor={textColor}>{children}</Item>
}
const Item = styled.span<{ textColor?: string }>`
	color: ${(props) => props.textColor};
	font-weight: bold;
`
export default ItemTable
