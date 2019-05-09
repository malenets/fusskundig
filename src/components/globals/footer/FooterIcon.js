import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { FaFacebook } from 'react-icons/fa';

export default class FooterIcon extends Component {
	render() {
		return (
			<IconWrapper>
				<FaFacebook>
					<a href="www.facebook.com" target="_blank" rel="noopener noreferrer" />
				</FaFacebook>
			</IconWrapper>
		);
	}
}

const IconWrapper = styled.div`
	color: ${styles.colors.mainGrey2};
	text-align: center;
	font-size: 1.2rem;
	margin-bottom: 1.5rem;
	margin-top: 2.5rem;
`;
