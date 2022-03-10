import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'wouter'
import HeaderButton from './HeaderButton'
import HeaderFilter from './HeaderFilter'
import HeaderInput from './HeaderInput'

const HeaderWrapper = styled.header`
	background-color: ${props => props.theme.colors.white};
	position: sticky;
	top: 0;
	align-items: center;
	padding: 18px 32px 16px;
	transition: box-shadow 0.3s ease-out;
	z-index: ${props => props.theme.z.l3};
	&.scroll {
		box-shadow: ${props => props.theme.shadow};
	}

	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		background-color: #EDEDED;
		padding: 8px 15px;
	}
`

const HeaderContainer = styled.div`
	display: flex;
	
	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		background-color: ${props => props.theme.colors.white};
		border-radius: ${props => props.theme.radius};
		display: flex;
		padding: 5px;
	}
`

const FormWrapper = styled.form`
	display: flex;
	width: 100%;
`

const Header = () => {
	const headerContainer = useRef(null);

	const [location, setLocation] = useLocation();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 0
				? headerContainer.current.classList.add('scroll')
				: headerContainer.current.classList.remove('scroll')
		})
	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		const input = e.target.querySelector('input');

		if (input.value !== '') {
			setLocation(`/search?keyword=${input.value}`)
		}
	}

	return (
		<HeaderWrapper ref={headerContainer}>
			<HeaderContainer>
				<HeaderFilter />
				<FormWrapper onSubmit={handleSubmit}>
					<HeaderInput />
					<HeaderButton />
				</FormWrapper>
			</HeaderContainer>
		</HeaderWrapper>
	)
}

export default Header