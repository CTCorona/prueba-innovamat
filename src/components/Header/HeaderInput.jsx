import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
	padding: 10px 40px;
	width: 100%;
	height: 40px;
	border: 1px solid #E3E3E3;
	border-left: none;
	border-radius: 0 10px 10px 0;
	font-size: ${props => props.theme.fonts.normal};
	margin-right: 14px;
	&::placeholder {
		color: ${props => props.theme.colors.midGrey};
	}

	&::hover::placeholder {
		color: ${props => { props.theme.colors.darkGrey }};
	}

	&:focus, &:active {
		outline: none;
	}

	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		border: none;
		padding: 10px;
	}

`

const HeaderInput = () => {
	return (
		<Input placeholder='Introduce un texto' />
	)
}

export default HeaderInput