import React, { useState } from 'react'
import styled from 'styled-components'

const Chip = styled.div(props => ({

	backgroundColor: props.theme.colors.lightGrey,
	fontSize: props.theme.fonts.micro,
	color: props.theme.colors.black,
	textAlign: 'center',
	padding: 5,
	marginRight: 8,
	marginBottom: 8,
	borderRadius: 5,
	cursor: 'pointer',
	flexBasis: `calc(${props.width} - 8px)`,

	'&.active': {
		backgroundColor: props.theme.colors.darkestGrey
	}
}))


const FilterChip = ({ name, width }) => {
	const [active, setActive] = useState(false);

	const toggleChip = () => {
		setActive(!active)
	}

	return (
		<Chip className={active ? 'active' : ''} onClick={toggleChip} width={width}>
			{name}
		</Chip>
	)
}

export default FilterChip