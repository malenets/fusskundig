import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader, Banner } from '../utils';
import aboutImg from '../images/bcg/on-beach.jpg';
import Uns from '../components/Sidepage/uns/uns';
import Cookies from '../components/cookie/Cookies';

const UnsPage = () => (
	<Layout>
		<SEO title="Uns" keywords={[ `fußkundig`, `fusskundig`, `fusskundig gbr`,`fußkundig gbr` ]} />
		<PageHeader img={aboutImg}>
			<Banner title="ÜBER UNS" subtitle="unser wissen für ihre füße" />
		</PageHeader>
		<Uns />
		<Cookies />
	</Layout>
);

export default UnsPage;
