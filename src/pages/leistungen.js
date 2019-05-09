import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader, Banner } from '../utils';
import LeistungenImg from '../images/bcg/water-feet.jpeg';
import Leistungen from '../components/Sidepage/leistungen/Leistungen';

const LeistungenPage = () => (
	<Layout>
		<SEO title="Leistungen" keywords={[ `gatsby`, `application`, `react` ]} />
		<PageHeader img={LeistungenImg}>
			<Banner title="LEISTUNGEN" subtitle="Für Füße, auf die Sie stolz sein können" />
		</PageHeader>
		<Leistungen />
	</Layout>
);

export default LeistungenPage;
