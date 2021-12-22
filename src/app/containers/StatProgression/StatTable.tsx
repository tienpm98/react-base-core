import React from 'react'
import styled from 'styled-components'
import StatProgression from 'data/stat_progression.json'
import { Cell, Item, Row, Table } from 'components/Table'

const StatTable = () => {
	return (
		<div>
			<Title>Stat Progression</Title>
			<Table>
				{StatProgression.map((stat, index: number) => (
					<Row key={index}>
						<Cell>
							<Item>{stat.level}</Item>
						</Cell>

						<Cell>
							<Item textColor={stat.jade.color}>
								{stat.jade.name} x {stat.jade.number}
							</Item>
						</Cell>

						<Cell>
							<Item textColor={stat.flower.color}>
								{stat.flower.name} x {stat.flower.number}
							</Item>
						</Cell>

						<Cell>
							<Item textColor={stat.item_boss.color}>
								{stat.item_boss.name} x {stat.item_boss.number}
							</Item>
						</Cell>

						<Cell>
							<Item textColor={stat.item_map_1.color}>
								{stat.item_map_1.name} x {stat.item_map_1.number}
							</Item>
						</Cell>
					</Row>
				))}
			</Table>
		</div>
	)
}

const Title = styled.h1`
	color: #444;
	padding: 8px 0;
`

export default StatTable
