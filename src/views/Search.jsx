import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components';
import ContentItem from '../components/Content/ContentItem';
import searchContent from '../services/searchContent';

const SkeletonBody = styled.div`
	display: flex;
	flex-direction: column;
`

const Container = styled.section`
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
	border-bottom: 1px solid #C5D6D5;
	padding-bottom: 5px;
	margin-bottom: 6px;
`

const ResultsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 209px);
	gap: 12px;

	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		grid-template-columns: 100%;
	}
`

const Search = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true)
		const urlParam = new URLSearchParams(window.location.search)
		const value = urlParam.get('keyword');

		searchContent({ keyword: value })
			.then(res => {
				setData(res)
				setLoading(false)
			})
	}, [])

	return (
		<Container>
			<Title>Resultados</Title>
			<ResultsWrapper>
				{
					data.length > 0 ?
						data.map((item, i) => (
							loading
								? (
									<SkeletonBody key={i}>
										<Skeleton count={1} height={118} width="100%" />
										<Skeleton count={1} width="25%" />
										<Skeleton count={1} width="100%" />
									</SkeletonBody>
								)
								:
								<ContentItem
									title={item.title}
									tag={item.tag}
									description={item.description}
									image={item.image}
									id={item.id}
									key={i}
								/>
						))
						: ''
				}
			</ResultsWrapper>
		</Container>
	)
}

export default Search