import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import OnyfixNagel from '../components/Sidepage/leistungen/productPages/onyfix';

const onyfix = () => (
	<Layout>
		<SEO title="Onyfix" keywords={[ `onyfix`, `nagelkorrektur`, `nagelkorrekturspange` ]} />
		<OnyfixNagel />
	</Layout>
);

export default onyfix;
