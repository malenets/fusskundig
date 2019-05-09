import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Fussanalyse from '../components/Sidepage/leistungen/productPages/fussanalyse';

const beratung = () => (
	<Layout>
		<SEO title="Fussanalyse" keywords={[ `beratung`, `fussanalyse`, `podologie düsseldorf` ]} />
		<Fussanalyse />
	</Layout>
);

export default beratung;
