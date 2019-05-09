import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../../../images/logo.png';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';
import { styles } from '../../../utils';

export default class NavbarHeader extends Component {
	render() {
		const { handleNavbar } = this.props;
		return (
			<HeaderWrapper>
				<Link to="/">
					<img src={logo} alt="Fusskundig" />
				</Link>
				<FaBars
					className="toggle-icon"
					onClick={() => {
						handleNavbar();
					}}
				/>
			</HeaderWrapper>
		);
	}
}

const HeaderWrapper = styled.div`
	padding: 0.4rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.toggle-icon {
		font-size: 2rem;
		color: ${styles.colors.mainGrey};
		cursor: pointer;
	}
	@media (min-width: 768px) {
		.toggle-icon {
			display: none;
		}
	}
	img {
		height: 4.58rem;
	}
`;
