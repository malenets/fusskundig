import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hornhaut from '../components/Sidepage/leistungen/productPages/hornhautbehandlung';

const hornhautbehandlung = () => (
	<Layout>
		<SEO title="Hornhautbehandlung" keywords={[`hornhautbehandlung`, `hornhaut`, `schwielen`, `ragaden`, `hornhaut entfernen`, `druckstellen` ]} />
		<Hornhaut />
	</Layout>
);

export default hornhautbehandlung;
