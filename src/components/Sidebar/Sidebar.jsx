import React from 'react'
import styled from 'styled-components'
import SidebarSection from './SidebarSection'

const Wrapper = styled.aside`
	position: sticky;
	top: 91px;
	padding: 10px 22px;
	height: 75vh;
	max-height: 738px;
	width: 100%;
	max-width: 240px;
	border-right: 1px solid #E6E6E6;
	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		display: none;
	}
`

const MobileWrapper = styled.nav`
	display: none;
	
	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		background-color: white;
		position: fixed;
		bottom: 0;
		left: 0;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		width: 100vw;
		height: 69px;
		padding: 13px 15px;
		box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.06);
		z-index: ${props=>props.theme.z.l3};
	}
`

const Title = styled.h3`
	font-weight: ${props => props.theme.weight.regular};
	border-bottom: 1px solid #EDEDED;
`

const Sidebar = () => {

	const dynamics = [
		{
			id: 1,
			icon: 'workshops',
			title: 'Talleres',
			href: '/dynamic/talleres'
		},
		{
			id: 2,
			icon: 'nooks',
			title: 'Rincones',
			href: '/dynamic/rincones'
		},
		{
			id: 3,
			icon: 'environments',
			title: 'Ambientes',
			href: '/dynamic/ambientes'
		},
		{
			id: 4,
			icon: 'routines',
			title: 'Rutinas',
			href: '/dynamic/rutinas'
		}
	]

	return (
		<>
			<Wrapper>
				<Title>
					Dinámicas
				</Title>
				{
					dynamics.map((item) => (
						<SidebarSection
							key={item.id}
							icon={item.icon}
							title={item.title}
							href={item.href}
						/>
					))
				}
			</Wrapper>
			<MobileWrapper>
				{
					dynamics.map((item) => (
						<SidebarSection
							key={item.id}
							icon={item.icon}
							title={item.title}
							href={item.href}
						/>
					))
				}

			</MobileWrapper>
		</>
	)
}

export default Sidebar