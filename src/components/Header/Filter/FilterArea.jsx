import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '../../Common/Icon'
import FilterChip from './FilterChip'

const Container = styled.div`
	margin-bottom: 10px;

	&.show {
		margin-bottom: 20px;
	}
`

const Label = styled.div`
	font-size: ${props => props.theme.fonts.small};
	font-weight: ${props => props.theme.weight.bold};
	color: ${props => props.theme.colors.black};
	margin-bottom: 12px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	
	& h5 {
		margin-bottom: 0;
	}

	& svg {
		transform: scale(0.8);
	}
	
	${Container}.show &{
		& svg {
			transform: scale(0.8) rotate(180deg);
		}
	}
`

const ChipsContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	/* justify-content: space-between; */
	display: none;

	${Container}.show & {
		display: flex;
	}
`

const FilterArea = ({ label, chips, width }) => {
	const [toggle, setToggle] = useState(false)

	const handleToggle = () => {
		setToggle(!toggle)
	}

	return (
		<Container className={toggle ? 'show' : ''}>
			<Label onClick={handleToggle}>
				<h5>{label}</h5>
				<Icon icon="chevronDown" stroke="#A3B7B5" />
			</Label>
			<ChipsContainer>
				{
					chips.map((chip, i) => (
						<FilterChip width={width} name={chip} key={i} />
					))
				}
			</ChipsContainer>
		</Container>
	)
}

export default FilterArea