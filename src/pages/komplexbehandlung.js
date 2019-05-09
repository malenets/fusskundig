import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import PodKomp from '../components/Sidepage/leistungen/productPages/komplexbehandlung';

const Komplexbehandlung = () => (
	<Layout>
		<SEO title="Komplexbehandlung" keywords={[ `podologoische komplexbehandlung`, `düsseldorf`, `medizinische fusspflege`, ]} />
		<PodKomp />
	</Layout>
);

export default Komplexbehandlung;
