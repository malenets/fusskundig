import React, { Component } from 'react';
import NavbarHeader from './NavbarHeader';
import NavbarLinks from './NavbarLinks';
import styled from 'styled-components';
import NavbarAction from './NavbarAction';
import { styles } from '../../../utils';

export default class navbar extends Component {
	state = {
		navbarOpen: false
	};
	handleNavbar = () => {
		this.setState(() => {
			return { navbarOpen: !this.state.navbarOpen };
		});
	};
	render() {
		return (
			<NavWrapper>
				<NavbarHeader handleNavbar={this.handleNavbar} />
				<NavbarLinks navbarOpen={this.state.navbarOpen} />
				<NavbarAction />
			</NavWrapper>
		);
	}
}

const NavWrapper = styled.nav`
	@media (min-width: 768px) {
		display: flex;
		align-items: center;
	}
	@media (min-height: 300px) {
		position: sticky;
		top: 0;
		background: ${styles.colors.mainWhite};
		z-index: 500;
		padding-bottom: 0.1rem;
	}
`;
