import React from 'react';
//import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[ `gatsby`, `application`, `react` ]} />
		{/*<Link to="/">Go to page 2</Link>*/}
		<h3>Home</h3>
	</Layout>
);

export default IndexPage;
