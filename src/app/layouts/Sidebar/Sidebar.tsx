import React from 'react'
import styled from 'styled-components'
import { setSelectedTab } from 'store/Sidebar'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import Icon from 'components/Icon'

const Navigator = [
	{
		name: 'Characters',
		icon: 'helmet',
	},
	{ name: 'Weapons', icon: 'weapon' },
]

const Sidebar: React.FC = () => {
	const dispatch = useAppDispatch()
	const { selectedTab } = useAppSelector((state) => state.sidebarReducer)

	return (
		<Wrapper>
			<List>
				{Navigator.map((nav, index) => (
					<Item
						key={index}
						active={selectedTab === index ? true : false}
						onClick={() => dispatch(setSelectedTab(index))}
					>
						<Icon
							source={require(`../../assets/images/${nav.icon}.svg`)}
							fill={selectedTab === index ? '#fff' : '#333'}
						/>
						{nav.name}
					</Item>
				))}
			</List>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 100%;
	width: 300px;
	max-width: 300px;
	background: #d3d3d3;
`

const List = styled.ul`
	margin: 0;
	padding: 8px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`

const Item = styled.li<{ active?: boolean }>`
	list-style: none;
	padding: 8px;
	border-radius: 4px;
	cursor: pointer;
	background: ${(props) => (props.active ? '#444' : '#fff')};
	color: ${(props) => (props.active ? '#fff' : '#333')};
	display: flex;
	gap: 4px;
	align-item: center;
`

export default Sidebar
