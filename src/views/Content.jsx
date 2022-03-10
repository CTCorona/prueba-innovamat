import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components'
import getSection from '../services/getSection'
import ContentSection from '../components/Content/ContentSection'

const Container = styled.div`
   padding: 10px 13px 10px 40px;
	width: 100%;
	display: flex;
	flex-direction: column;
	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		padding: 10px 0;
	}
`

const Title = styled.h1`
	text-transform: capitalize;
	font-size: ${props => props.theme.fonts.large};
	font-weight: ${props => props.theme.weight.bold};
`

const Content = ({ params }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		getSection({ section: params.name })
			.then(res => {
				setData(res)
				setLoading(false)
			})
	}, [params])

	return (
		<Container>
			<Title>{loading ? <Skeleton
				width={100}
				count={1}
			/> : params.name}</Title>
			{
				data.length > 0 ?
					data.map((section, i) => (
						<ContentSection
							title={section.sectionName}
							resources={section.resources}
							loading={loading}
							key={i}
						/>
					))
					: ''
			}
		</Container>
	)
}

export default Content