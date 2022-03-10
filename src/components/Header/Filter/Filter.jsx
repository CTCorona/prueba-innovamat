import React from 'react'
import styled from 'styled-components'
import FilterArea from './FilterArea'

const Container = styled.div`
	position: absolute;
	width: 100%;
	top: 100%;
	left: 0;
	background-color: ${props => props.theme.colors.white};
	padding: 20px 15px;
	border: 1px solid #E3E3E3;
	border-top: none;
	border-radius: 0 0 10px 10px;
	box-shadow: ${props => props.theme.shadow};
	cursor: default;
	display: none;
	&.show {
		display: block;
	}
`

const Filter = ({ isOpen }) => {

	const filters = [
		{
			label: 'Realizable en',
			chips: ['Escuela', 'Casa'],
			width: '50%'
		},
		{
			label: 'Curso',
			chips: ['P3', 'P4', 'P5', '1r', '2n', '3r', '4t', '5è', '6è'],
			width: '15%'
		},
		{
			label: 'Dinamicas de aula',
			chips: ['Talleres', 'Rincones', 'Ambientes', 'Rutinas'],
			width: '50%'
		},
		{
			label: 'Bloques de contenido',
			chips: ['Numeración', 'Cálculo', 'Medidas'],
			width: '50%'
		},
	]

	return (
		<Container className={isOpen ? 'show' : ''}>
			{
				filters.map((filter, i) => (
					<FilterArea {...filter} key={i} />
				))
			}
		</Container>
	)
}

export default Filter