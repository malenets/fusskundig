import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import Icon from './FooterIcon';
import Important from './FooterImportant';
import Address from './FooterAddress';
import '../../bootstrap.min.css';
import Links from './FooterLinks';

export default class Footer extends Component {
	render() {
		return (
			<FooterWrapper>
				<div className="title">Fußkundig GbR - Podologie Düsseldorf</div>
				<div className="row">
					<Links className="info col-md-3 mb-md-0 mb-3" />
					<Important className="legal col-md-3 mb-md-0 mb-3" />
					<Address className="col-md-3 mb-md-0 mb-3" />
				</div>
				<Icon />
				<p className="powered copy">copyright &copy; 2019 fußkundig GbR</p>
				<p className="powered">Powered by Foxter Solutions, Inh. Pascal Gross</p>
			</FooterWrapper>
		);
	}
}

const FooterWrapper = styled.footer`
	padding: 2rem 0;
	background: ${styles.colors.mainGrey};
	.title {
		text-align: center;
		color: ${styles.colors.mainWhite};
		font-size: 1.5rem;
		text-transform: capitalize;
	}
	.powered {
		text-align: center;
		color: ${styles.colors.mainGrey2};
		font-size: 0.75rem;
		text-transform: capitalize;
		margin: 1rem 0;
	}
	.copy {
		margin-top: 2rem;
	}
	span {
		margin-left: 1.5rem;
		margin-right: 1.5rem;
	}
	.row {
		justify-content: space-around;
		text-align: center;
		margin: auto;
		@media (max-width: 700px) {
			display: block;
		}
	}
`;
