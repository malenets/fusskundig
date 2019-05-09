import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';

export default class FooterAddress extends Component {
	render() {
		return (
			<AddressWrapper>
				<div className="adresse">
					<h3>Adresse</h3>
					<a
						className="adr"
						href="https://goo.gl/maps/YyJYak5VnCEFg6Rq6"
						target="_blank"
						rel="noopener noreferrer"
					>
						Fußkundig GbR <br /> Gladbacher Str. 26 <br />40219 Düsseldorf
					</a>
				</div>
			</AddressWrapper>
		);
	}
}

const AddressWrapper = styled.div`
	.adresse {
		margin: 1rem auto;
		${styles.transition({})};
	}
	display: flex;
	.adr {
		${styles.transition({})};
		color: ${styles.colors.mainGrey2};
		text-decoration: none;
		line-height: 2.5rem;
		&:hover {
			color: ${styles.colors.mainWhite};
		}
	}
	h3 {
		text-transform: uppercase;
		color: ${styles.colors.mainGrey2};
		font-size: 1.5rem;
		margin-top: 1rem;
	}
`;
