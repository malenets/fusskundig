import React from 'react';
import { styles } from '../utils';
import styled from 'styled-components';

export default function Mail() {
	return (
		<MailWrapper>
			<a href="mailto: info@fusskundig.de" className="mail" target="_blank" rel="noopener noreferrer">
				Schreibe uns eine Email
			</a>
		</MailWrapper>
	);
}

const MailWrapper = styled.button`
	display: block;
	color: ${styles.colors.mainGrey};
	background: transparent;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	letter-spacing: 0.15rem;
	font-weight: 700;
	${styles.border({ color: `${styles.colors.mainGrey}` })};
	margin: 1rem auto;
	${styles.transition({})};
	&:hover {
		background: ${styles.colors.mainGrey};
		color: ${styles.colors.mainGrey};
		cursor: pointer;
		.mail {
			color: ${styles.colors.mainWhite};
		}
	}
	.mail {
		text-decoration: none;
		color: ${styles.colors.mainGrey};
	}
`;
