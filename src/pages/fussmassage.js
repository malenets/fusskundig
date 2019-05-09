import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Fuss from '../components/Sidepage/leistungen/productPages/fussmassage';

const fussmassage = () => (
	<Layout>
		<SEO title="Fussmassage" keywords={[ `fussmassage`, `fuss massage`, `fussschmerzen` ]} />
		<Fuss />
	</Layout>
);

export default fussmassage;
