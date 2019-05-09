import React from 'react';
import { styles } from '../utils';
import styled from 'styled-components';
import { FaPhone } from 'react-icons/fa';

export default function Call() {
	return (
		<CallWrapper>
			<a href="tel: +49211428881" className="phone" target="_blank" rel="noopener noreferrer">
				<FaPhone /> Termine: 0211 / 428881
			</a>
		</CallWrapper>
	);
}

const CallWrapper = styled.button`
	display: block;
	color: ${styles.colors.mainWhite};
	background: transparent;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	letter-spacing: 0.15rem;
	font-weight: 700;
	${styles.border({ color: `${styles.colors.mainWhite}` })};
	margin: 1rem auto;
	${styles.transition({})};
	&:hover {
		background: ${styles.colors.mainWhite};
		color: ${styles.colors.mainGrey};
		cursor: pointer;
		.phone {
			color: ${styles.colors.mainGrey};
		}
	}
	.phone {
		text-decoration: none;
		color: ${styles.colors.mainWhite};
	}
`;
