import React from 'react';
import styled from 'styled-components';
import { styles } from '../utils';

export default function Banner({ title, title2, subtitle, children }) {
	return (
		<BannerWrapper>
			<h1 className="title">{title}</h1>
			<h2 className="title2">{title2}</h2>
			<h3 className="subtitle">{subtitle}</h3>
			<h1 className="children">{children}</h1>
		</BannerWrapper>
	);
}

const BannerWrapper = styled.div`
	margin-bottom: 3rem;
	text-align: center;
	.title {
		color: ${styles.colors.mainWhite};
		font-size: 3rem;
		text-transform: capitalize;
		${styles.letterSpacing({ spacing: '0.5rem' })};
		@media (max-width: 400px) {
			font-size: 2.5rem;
		}
	}
	.title2 {
		color: ${styles.colors.mainWhite};
		font-size: 2rem;
		text-transform: uppercase;
		${styles.letterSpacing({ spacing: '0.25rem' })};
		margin-bottom: 0.75rem;
	}
	.subtitle {
		color: ${styles.colors.mainWhite};
		${styles.textNice};
		${styles.letterSpacing({ spacing: '0.15rem' })};
		font-size: 2rem;
	}
`;

Banner.defaultProps = {
	title: 'default title'
};
