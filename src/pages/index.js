import React from 'react';
//import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { HomeHeader, Banner } from '../utils';
import img from '../images/bcg/mountain-feet.jpg';
import Quickinfo from '../components/HomePageComponents/Quickinfo';
import Problems from '../components/HomePageComponents/Problems';
import ControlledCarousel from '../components/HomePageComponents/Carousel';
import Cookies from '../components/cookie/Cookies';
import Call from '../components/call';

const IndexPage = () => (
	<Layout>
		<SEO title="Fusskundig" keywords={[ `podologie`, `diabetes`, `düsseldorf`,`podologie düsseldorf`, `diabetiker`, `probleme mit den füssen`,`medizinische fusspflege düsseldorf`, `medizinische fusspflege`, `fusskundig`, `fußkundig`, `schulmeister podologie`, `p2`, `podologie bilk`, `martinus krankenhaus`  ]} />
		<HomeHeader img={img}>
			<Banner title="FUßKUNDIG" title2="Podologie" subtitle="Für Füße, auf die Sie stolz sein können">
				<Call />
			</Banner>
		</HomeHeader>
		<Quickinfo />
		<Problems />
		<ControlledCarousel />
		<Cookies />
	</Layout>
);

export default IndexPage;
