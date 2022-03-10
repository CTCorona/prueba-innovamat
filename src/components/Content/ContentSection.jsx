import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'
import ContentItem from './ContentItem'

const SkeletonBody = styled.div`
	display: flex;
	flex-direction: column;
`

const Section = styled.section`
	margin-bottom: 20px;
`

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 209px);
	gap: 12px;

	@media (max-width: ${props => props.theme.breakpoints.maxSm}) {
		grid-template-columns: 100%;
	}
`

const Title = styled.h2`
	width: 100%;
	font-size: ${props => props.theme.fonts.caption};
	font-weight: ${props => props.theme.weight.bold};
	border-bottom: 1px solid #C5D6D5;
	padding-bottom: 5px;
	margin-bottom: 6px;
`

const ContentSection = ({ title, resources, loading }) => {
	return (
		<Section>
			<Title>{loading ? <Skeleton count={1} width={300} /> : title}</Title>
			<CardContainer>
				{

					resources.map((item, i) => (
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
				}

			</CardContainer>
		</Section>
	)
}

export default ContentSection