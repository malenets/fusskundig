import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Jobs from '../components/Sidepage/franchise/Franchise';
import { PageHeader, Banner } from '../utils';
import aboutImg from '../images/morepic/BannerPic/banner.franchise.jpg';

const FranchisePage = () => (
	<Layout>
		<SEO title="franchise" keywords={[ `franchise`, `podologie franchise` ]} />
		<PageHeader img={aboutImg}>
			<Banner title="FRANCHISE" subtitle="Die Fußkundig-Formel" />
		</PageHeader>
		<Jobs />
	</Layout>
);

export default FranchisePage;
