import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Teil from '../components/Sidepage/leistungen/productPages/teil';

const TeilAkut = () => (
	<Layout>
		<SEO title="Teil-Akutbehandlung" keywords={[ `podologie`, `akute schmerzen`, `eingewachsener nagel`,`Hühnerauge`,`schwielen` ]} />
		<Teil />
	</Layout>
);

export default TeilAkut;
