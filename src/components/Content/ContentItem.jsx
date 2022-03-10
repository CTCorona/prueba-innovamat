import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'
import Icon from '../Common/Icon'

const Card = styled.article`
	display: flex;
	flex-direction: column;
	padding: 12px 10px 6px;
	border-radius: 5px;
	transition: box-shadow 0.3s ease;
	cursor: pointer;

	& a {
		text-decoration: none;
	}

	& img {
		margin-bottom: 6px;
		border-radius: 5px;
	}

	& h4 {
		color: ${props => props.theme.colors.black};
		font-weight: ${props => props.theme.weight.normal};
		font-size: ${props => props.theme.fonts.small};
		margin-bottom: 2px;
		line-height: 16px;
	}

	& p {
		color: ${props => props.theme.colors.darkGrey};
		font-size: ${props => props.theme.fonts.small};
		line-height: 16px;
	}

	&:hover, &:active, &:focus {
		box-shadow: ${props => props.theme.shadow};
	}
	`

const Fav = styled.span`
	margin: auto auto 0;
	width: fit-content;
	display: flex;
	align-items: center;
	font-size: ${props => props.theme.fonts.micro};
	color: ${props => props.theme.colors.black};
	opacity: 0;
	transition: opacity 0.3s ease, color 0.3s ease;

	& svg {
		margin-right: 5px;
		fill: ${props => props.theme.colors.black};
		transition: fill 0.3s ease;

		& path:last-of-type {
			opacity: 0;
		}
	}
	
	&.liked {
		color: ${props => props.theme.colors.corp};
		& svg {
			fill: ${props => props.theme.colors.corp};

			& path:last-of-type {
				opacity: 1;
				transform: translate(2px, 2px);
			}
		}
	}
	
	${Card}:hover & {
		opacity: 1;

		&:hover {
			opacity: 0.5;
		}
	}
`

const ContentItem = ({ title, tag, description, image, id }) => {
	const [like, setLike] = useState(false)

	const toggleFav = () => {
		setLike(!like)
	}

	return (
		<Card data-tag={tag} data-id={id}>
			<img src={image} alt="image" loading="lazy" />
			<Link to={`/resources/${id}`}>
				<h4>
					{title}
				</h4>
				<p>
					{description}
				</p>
			</Link>
			<Fav className={like ? 'liked' : ''} onClick={toggleFav}>
				<Icon width={16} height={16} icon="heart" />
				Favorito
			</Fav>
		</Card>
	)
}

export default ContentItem