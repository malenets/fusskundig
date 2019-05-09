import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { FaPhone } from 'react-icons/fa';

export default class NavbarAction extends Component {
	render() {
		return (
			<React.Fragment>
				<TermineButton>
					<a href="tel: +49211428881" className="phone" target="_blank" rel="noopener noreferrer">
						<FaPhone /> Termine: 0211 / 428881
					</a>
				</TermineButton>
				<TermineLink>
					<a href="/kontakt/" className="desktop">
						<FaPhone /> Termine: 0211 / 428881
					</a>
				</TermineLink>
			</React.Fragment>
		);
	}
}

const TermineButton = styled.button`
	.phone {
		font-size: 1.3rem;
		cursor: pointer;
		text-decoration: none;
		color: ${styles.colors.mainGrey2};
		font-weight: 700;
		font-size: 0.9rem;
		${styles.transFunction(undefined, '0.5s')};
		background: white;
		padding: 0.2rem 1rem;
		letter-spacing: 0.15rem;
		margin: 0 auto;
		border: solid #898989;
		text-align: center;
	}
	.phone:hover {
		background: ${styles.colors.mainGrey2};
		color: ${styles.colors.mainBlack};
	}
	display: none;
	@media (max-width: 767px) {
		display: flex;
		width: 17.5rem;
	}
	margin-bottom: 0.25rem;
`;

const TermineLink = styled.div`
	.desktop {
		font-size: 1.3rem;
		cursor: pointer;
		text-decoration: none;
		color: ${styles.colors.mainGrey};
		font-weight: 700;
		font-size: 0.9rem;
		${styles.transFunction(undefined, '0.5s')};
		color: ${styles.colors.mainGrey2};
	}
	.desktop:hover {
		color: ${styles.colors.mainGrey};
		font-size: 0.94rem;
	}
	display: none;
	@media (min-width: 768px) {
		display: flex;
		width: 15rem;
		height: auto;
	}
`;
