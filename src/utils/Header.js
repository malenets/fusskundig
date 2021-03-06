import React from 'react';
import styled from 'styled-components';
import img from '../images/bcg/mountain-feet.jpg';

function HomeHeader({ img, children }) {
	return <IndexHeader img={img}>{children}</IndexHeader>;
}

function PageHeader({ img, children }) {
	return <DefaultHeader img={img}>{children}</DefaultHeader>;
}

const IndexHeader = styled.header`
	min-height: calc(100vh - 55.78px);
	background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
		url(${(props) => props.img}) center/cover no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 550px) {
		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
			url(${(props) => props.img}) center/cover fixed no-repeat;
	}
`;

const DefaultHeader = styled(IndexHeader)`
min-height: 60vh;
`;

HomeHeader.defaultProps = {
	img: img
};

PageHeader.defaultProps = {
	img: img
};

export { HomeHeader, PageHeader };
