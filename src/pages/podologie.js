import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Prob3 from '../components/Sidepage/problems/Prob3';
import { PageHeader, Banner } from '../utils';
import aboutImg from '../images/morepic/BannerPic/Banner.podologie.jpg';

const Podologie = () => (
	<Layout>
		<SEO title="Podologie" keywords={[ `podologie`, `was ist podologie`, `medizinische fusspflege` ]} />
		<PageHeader img={aboutImg}>
			<Banner title="Podologie" subtitle="Was genau bedeutet es?" />
		</PageHeader>
		<Prob3 />
	</Layout>
);

export default Podologie;
