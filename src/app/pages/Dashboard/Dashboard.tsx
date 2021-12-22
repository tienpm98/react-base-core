import React, { useState } from 'react'
import styled from 'styled-components'
import StatTable from 'containers/StatProgression/StatTable'
import Talent from 'containers/Talent/Talent'
import Weapon from 'containers/Weapons/Weapon'
import TwoColumn from 'layouts/TwoColumns/TwoColumn'
import Sidebar from 'layouts/Sidebar'
import { useAppSelector } from 'hooks/useRedux'

const CharacterStat = () => {
	const TAB_ITEM = [
		{
			name: 'Stat',
		},
		{
			name: 'Talent',
		},
	]

	const [selectedTab, setSelectedTab] = useState<number>(0)

	const renderContent = (selectedTab: number) => {
		switch (selectedTab) {
			case 0:
				return <StatTable />

			case 1:
				return <Talent />

			default:
				return <StatTable />
		}
	}

	return (
		<Container>
			<Tab>
				{TAB_ITEM.map((item, index) => (
					<TabItem
						key={index}
						active={selectedTab === index ? true : false}
						onClick={() => setSelectedTab(index)}
					>
						{item.name}
					</TabItem>
				))}
			</Tab>
			{renderContent(selectedTab)}
		</Container>
	)
}

const Dashboard = () => {
	const { selectedTab } = useAppSelector((state) => state.sidebarReducer)
	const renderContent = (selectedTab: number) => {
		switch (selectedTab) {
			case 0:
				return <CharacterStat />

			case 1:
				return (
					<Container>
						<Weapon />
					</Container>
				)

			default:
				break
		}
	}
	return <TwoColumn left={<Sidebar />} content={renderContent(selectedTab)} />
}

const Container = styled.div`
	padding: 10px;
`

const Tab = styled.div`
	display: flex;
	max-width: 200px;
	width: 100%;
	border: 1px solid #ddd;
	border-radius: 4px;
	margin: 0 auto;
`

const TabItem = styled.span<{ active: boolean }>`
	width: 100%;
	max-width: 100px;
	padding: 8px;
	box-sizing: border-box;
	text-align: center;
	cursor: pointer;
	background: ${(props) => (props.active ? '#444' : '#fff')};
	color: ${(props) => (props.active ? '#fff' : '#444')};
`

export default Dashboard
