import React, { Component } from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { FaPhone } from 'react-icons/fa';

export default class NavbarIcons extends Component {
	state = {
		phone: [
			{
				id: 1,
				icon: <FaPhone className="phone" />,
				path: 'tel: +49211428881'
			},
			{
				id: 2,
				icon: 'Termine: 0211 / 428881',
				path: 'tel: +49211428881'
			}
		],
		desktop: [
			{
				id: 3,
				icon: <FaPhone className="kontakt" />,
				path: '/kontakt/'
			},
			{
				id: 4,
				icon: 'Termine: 0211 / 428881',
				path: '/kontakt/'
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<PhoneWrapper>
					{this.state.phone.map((item) => {
						return (
							<a href={item.path} className="phone" key={item.id}>
								{item.icon}
							</a>
						);
					})}
				</PhoneWrapper>
				<DesktopWrapper>
					{this.state.desktop.map((item) => {
						return (
							<a href={item.path} className="desktop" key={item.id}>
								{item.icon}
							</a>
						);
					})}
				</DesktopWrapper>
			</React.Fragment>
		);
	}
}

const PhoneWrapper = styled.div`
	.phone {
		font-size: 1.3rem;
		cursor: pointer;
		text-decoration: none;
		color: ${styles.colors.mainGrey};
		font-weight: 700;
		font-size: 0.9rem;
		${styles.transFunction(undefined, '0.5s')};
		color: #898989;
	}
	.phone:hover {
		color: ${styles.colors.mainYellow};
	}
	display: none;
	@media (max-width: 600px) {
		display: flex;
		width: 20rem;
	}
`;

const DesktopWrapper = styled.div`
	.desktop {
		font-size: 1.3rem;
		cursor: pointer;
		text-decoration: none;
		color: ${styles.colors.mainGrey};
		font-weight: 700;
		font-size: 0.9rem;
		${styles.transFunction(undefined, '0.5s')};
		color: #898989;
	}
	.desktop:hover {
		color: ${styles.colors.mainYellow};
	}
	display: none;
	@media (min-width: 600px) {
		display: flex;
		width: 15rem;
		height: auto;
	}
`;
