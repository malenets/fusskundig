import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Nagel from '../components/Sidepage/leistungen/productPages/nagelbearbeitung';

const Nagelbearbeitung = () => (
	<Layout>
		<SEO title="Nagelbehandlung" keywords={[ `zehnagel`, `eingewachsener nagel`, `unguis incarnatus` ]} />
		<Nagel />
	</Layout>
);

export default Nagelbearbeitung;
