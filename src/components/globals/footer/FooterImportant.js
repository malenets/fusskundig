import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { Link } from 'gatsby';

export default class Important extends Component {
	state = {
		pages: [
			{
				id: 1,
				page: 'AGB',
				path: '/terms/'
			},
			{
				id: 2,
				page: 'Impressum',
				path: '/impressum/'
			},
			{
				id: 3,
				page: 'Datenschutz',
				path: '/data-protection/'
			}
		]
	};
	render() {
		return (
			<ImportantWrapper>
				<h3 className="legal">Rechtliches</h3>
				{this.state.pages.map((item) => (
					<Link to={item.path} className="pages" key={item.id} target="_blank" rel="noopener noreferrer">
						{item.page}
					</Link>
				))}
			</ImportantWrapper>
		);
	}
}

const ImportantWrapper = styled.div`
	margin-top: 2rem;
	background: ${styles.colors.mainGrey};
	.pages {
		color: ${styles.colors.mainGrey2};
		${styles.transition({})};
		text-decoration: none;
		display: block;
		align-items: center;
		line-height: 2.5rem;
		&:hover {
			color: ${styles.colors.mainWhite};
		}
	}
	.legal {
		text-transform: uppercase;
		color: ${styles.colors.mainGrey2};
		font-size: 1.5rem;
	}
	@media (min-width: 701px) {
		margin-left: 4rem;
	}
`;
