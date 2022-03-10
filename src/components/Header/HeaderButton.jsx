import React from 'react'
import styled, { useTheme } from 'styled-components'
import Icon from '../Common/Icon'

const Button = styled.button`
	background-color: ${props => props.theme.colors.corp};
	color: ${props => props.theme.colors.white};
	font-size: ${props => props.theme.fonts.normal};
	padding: 10px 0;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-radius: ${props => props.theme.radius};
	width: 100%;
	height: 40px;
	max-width: 256px;
	transition: background-color 0.3s ease-in-out;
	& span {
		margin-left: 10px;
	}

	& svg {
		stroke: ${props => props.theme.colors.white}
	}

	&:hover {
		background-color: ${props => props.theme.colors.darkCorp};
	}

	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		width: auto;
		background-color: transparent;
		padding: 10px;
		& svg {
		stroke: ${props => props.theme.colors.corp}
	}
		& span {
			display: none;
		}
	}
`

const HeaderButton = () => {
	const theme = useTheme();

	return (
		<Button>
			<Icon icon="lens" width={22} />
			<span>
				Buscar
			</span>
		</Button>
	)
}

export default HeaderButton