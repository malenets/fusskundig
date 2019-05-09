import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NagelPro from '../components/Sidepage/leistungen/productPages/nagelprothetik';

const Nagelbearbeitung = () => (
	<Layout>
		<SEO title="Nagelprothetik" keywords={[ `nagelprothetik`, `nagel prothese`, `künstlicher nagel` ]} />
		<NagelPro />
	</Layout>
);

export default Nagelbearbeitung;
