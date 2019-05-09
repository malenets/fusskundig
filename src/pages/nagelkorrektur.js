import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Nagelkor from '../components/Sidepage/leistungen/productPages/nagelkorrektur';

const Nagelkorrektur = () => (
	<Layout>
		<SEO title="Nagelkorrektur" keywords={[ `nagelkorrektur`, `rollnagel`, `nagelkorrekturspange`, `vho` ]} />
		<Nagelkor />
	</Layout>
);

export default Nagelkorrektur;
