import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Prob2 from '../components/Sidepage/problems/Prob2';
import { PageHeader, Banner } from '../utils';
import aboutImg from '../images/morepic/BannerPic/banner.Wichtig.jpg';
import Cookies from '../components/cookie/Cookies';

const Prob2Page = () => (
	<Layout>
		<SEO title="Jobs" keywords={[ `job`, `karriere`, `ausbildung`, `podologie` ]} />
		<PageHeader img={aboutImg}>
			<Banner
				title="Warum Ihre Füße wichtig sind"
				subtitle="Eine gesunde Basis ist wichtig für den gesamten Körper"
			/>
		</PageHeader>
		<Prob2 />
		<Cookies />
	</Layout>
);

export default Prob2Page;
