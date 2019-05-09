import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Dia from '../components/Sidepage/problems/Diabetes';
import { PageHeader, Banner } from '../utils';
import aboutImg from '../images/morepic/BannerPic/banner.diabetes.jpg';
import Cookies from '../components/cookie/Cookies';

const DiaPage = () => (
	<Layout>
		<SEO title="diabetiker" keywords={[ `diabetes`,`diabetiker`, `diabetischesfusssyndrom`, `DFS` ]} />
		<PageHeader img={aboutImg}>
			<Banner title="Diabetisches Fußsyndrom" subtitle="Was bedeutet es?" />
		</PageHeader>
		<Dia />
		<Cookies />
	</Layout>
);

export default DiaPage;
