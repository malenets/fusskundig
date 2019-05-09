import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { Link } from 'gatsby';

export default class Links extends Component {
	state = {
		pages: [
			{
				id: 1,
				page: 'Jobs',
				path: '/jobs/'
			},
			{
				id: 2,
				page: 'Franchise',
				path: '/franchise/'
			},
			{
				id: 3,
				page: 'Sitemap',
				path: '/sitemap/'
			}
		]
	};
	render() {
		return (
			<LinkWrapper>
				<h3 className="Pages">pages</h3>
				{this.state.pages.map((item) => (
					<Link to={item.path} className="pages" key={item.id} target="_blank" rel="noopener noreferrer">
						{item.page}
					</Link>
				))}
			</LinkWrapper>
		);
	}
}

const LinkWrapper = styled.div`
	background: ${styles.colors.mainGrey};
	margin-top: 2rem;
	.pages {
		color: ${styles.colors.mainGrey2};
		${styles.transition({})};
		text-decoration: none;
		display: block;
		line-height: 2.5rem;
		text-align: center;
		&:hover {
			color: ${styles.colors.mainWhite};
		}
	}
	.Pages {
		text-transform: uppercase;
		color: ${styles.colors.mainGrey2};
		font-size: 1.5rem;
		margin-top: 0.2rem;
	}
`;
