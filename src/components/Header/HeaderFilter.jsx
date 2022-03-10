import React, { useState } from 'react'
import styled from 'styled-components'
import Icon from '../Common/Icon'
import Filter from './Filter/Filter'

const FilterWrapper = styled.div`
	position: relative;
	max-width: 240px;
	width: 100%;
	color: ${props => props.theme.colors.darkestGrey};
	cursor: pointer;
	& .filter-label {
		border-radius: 10px 0 0 10px;
		border: 1px solid #E3E3E3;
		padding: 10px 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		
		& span {
			margin: 0 13px 0 16px;
		}
	
		& svg {
			stroke: ${props => props.theme.colors.darkestGrey};
		}
	}
	
	&.toggle {
		& .filter-label {
			color: ${props => props.theme.colors.corp};
			border-radius: 10px 0 0 0;
			
			& > svg {
				stroke: ${props => props.theme.colors.corp};
				&:first-of-type {
					transform: rotate(180deg);
				}
			}
		}
	}
	
	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		position: static;
		width: auto;
		max-width: none;
		order: 3;

		& .filter-label {
			border: none;
			padding: 0;
			width: auto;
			& span, & > svg:first-of-type {
				display: none;
			}
		}
	}
`

const HeaderFilter = () => {
	const [toggle, setToggle] = useState(false)

	const toggleFilter = () => {
		setToggle(!toggle)
	}

	return (
		<>
			<FilterWrapper className={toggle ? 'toggle' : ''} >
				<div className='filter-label' onClick={toggleFilter} >
					<Icon icon="chevronDown" />
					<span>
						Filtros
					</span>
					<Icon icon="settings" />
				</div>
				<Filter isOpen={toggle} />
			</FilterWrapper>
		</>
	)
}

export default HeaderFilter