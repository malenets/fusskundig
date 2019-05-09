import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Dia from '../components/Sidepage/problems/Diabetes';
import { PageHeader, Banner } from '../utils';
import aboutImg from '../images/morepic/BannerPic/banner.diabetes.jpg';

const DiaPage = () => (
	<Layout>
		<SEO title="diabetiker" keywords={[ `diabetes`, `diabetiker`, `diabetischesfusssyndrom`, `DFS` ]} />
		<PageHeader img={aboutImg}>
			<Banner title="Diabetisches Fußsyndrom" subtitle="Was bedeutet es?" />
		</PageHeader>
		<Dia />
	</Layout>
);

export default DiaPage;
