import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components';
import getResource from '../services/GetResource';

const Wrapper = styled.section`
	padding: 10px 13px 10px 40px;
	width: 100%;
	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		padding: 10px 0;
	}
`

const Title = styled.h1`
	font-size: ${props => props.theme.fonts.large};
	font-weight: ${props => props.theme.weight.bold};
`

const Description = styled.div`
	font-size: ${props => props.theme.fonts.medium};
	margin-bottom: 20px;
`

const File = styled.a`
	font-size: ${props => props.theme.fonts.medium};
	color: ${props => props.theme.colors.corp};
`


const Resources = ({ params }) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		setLoading(true)
		getResource({ id: params.id })
			.then(res => {
				setData(res)
				setLoading(false)
			})
	}, [])
	return (
		<Wrapper>
			<Title>
				{
					loading
						? <Skeleton
							width={150}
							count={1}
						/>
						: data.title}
			</Title>
			{
				loading
					? <Skeleton width="100%" count={5} />
					: <Description dangerouslySetInnerHTML={{ __html: data.description }} />
			}
			{
				loading
					? <Skeleton width={100} count={1} />
					: <File href={data.file} type={data.type} target='_blank'>Descargar recurso</File>
			}

		</Wrapper>
	)
}

export default Resources