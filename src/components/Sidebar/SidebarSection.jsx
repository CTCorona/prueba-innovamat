import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { useRoute } from 'wouter'
import { Link } from 'wouter'
import Icon from '../Common/Icon'

const Wrapper = styled(Link)`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 15px;
	color: ${props => props.theme.colors.darkestGrey};
	text-decoration: none;
	cursor: pointer;
	& path {
		stroke: ${props => props.theme.colors.darkestGrey};
	}
	&.selected {
		color: ${props => props.theme.colors.corp};
		& path {
			stroke: ${props => props.theme.colors.corp};
		}
	}

	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		font-size: ${props => props.theme.fonts.micro};
		flex-direction: column;
		justify-content: center;
	}
`

const IconSidebar = styled(Icon)`
	margin-right: 15px;
	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		margin-right: 0;
	}
`

const SidebarSection = ({ title = "title", icon, href = "#", loadSection }) => {
	const [isActive] = useRoute(href)

	return (
		<Wrapper href={href} className={isActive ? 'selected' : ''}>
			<IconSidebar icon={icon} />
			{title}
		</Wrapper>
	)
}

export default SidebarSection