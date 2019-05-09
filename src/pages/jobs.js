import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Jobs from '../components/Sidepage/jobs/jobs';
import { PageHeader, Banner } from '../utils';
import aboutImg from '../images/morepic/BannerPic/banner.jobs.jpg';
import Cookies from '../components/cookie/Cookies';

const JobsPage = () => (
	<Layout>
		<SEO title="Jobs" keywords={[ `jobs`, `karriere`, `podologie ausbilding`, `Ausbildung`, `podologie`, `arbeit` ]} />
		<PageHeader img={aboutImg}>
			<Banner title="JOBS" subtitle="Wir suchen Unterstützung für unser Team" />
		</PageHeader>
		<Jobs />
		<Cookies />
	</Layout>
);

export default JobsPage;
