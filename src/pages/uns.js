import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader, Banner } from '../utils';
import aboutImg from '../images/bcg/sand-feet.jpeg';
import Uns from '../components/Sidepage/uns/uns';

const UnsPage = () => (
	<Layout>
		<SEO title="Uns" keywords={[ `fußkundig`, `fusskundig`, `fusskundig gbr`, `fußkundig gbr` ]} />
		<PageHeader img={aboutImg}>
			<Banner title="ÜBER UNS" subtitle="Unser Wissen für Ihre Füße" />
		</PageHeader>
		<Uns />
	</Layout>
);

export default UnsPage;
