import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Navbar from '../components/globals/navbar';
import Footer from './globals/footer/Footer';
import Cookies from '../components/cookie/Cookies';
//import './layout.css';
//import './bootstrap.min.css';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<Navbar />
			{children}
			<Cookies />
			<Footer />
		</React.Fragment>
	);
};

const GlobalStyle = createGlobalStyle`
*{
	margin: 0;
	padding:0;
	box-sizing:border-box;
}
body{
	font-family: "Open Sans", sans-serif;
	
	color: #262626;
	background:#fff;
}
img {
	max-width: 100%;
}
h3{
	font-weight: lighter;
}
`;

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
