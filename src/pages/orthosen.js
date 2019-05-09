import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Orth from '../components/Sidepage/leistungen/productPages/orthosen';

const orthosen = () => (
	<Layout>
		<SEO title="Orthosen" keywords={[ `orthosen`, `fuss unterstützung`, `fehlstellung` ]} />
		<Orth />
	</Layout>
);

export default orthosen;
