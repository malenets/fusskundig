import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { PageHeader, Banner } from '../utils';
import kontaktImg from '../images/bcg/happyfeet.jpg';
import Kontakt from '../components/Sidepage/kontakt/kontakt';
import Cookies from '../components/cookie/Cookies';

const KontaktPage = () => (
	<Layout>
		<SEO title="Kontakt" keywords={[ `kontakt`, `öffnungszeiten`, `adresse`, `fußkundig`, `fusskundig`, `termine` ]} />
		<PageHeader img={kontaktImg}>
			<Banner title="KONTAKTIERE UNS JETZT" subtitle="und vereinbare einen Termin" />
		</PageHeader>
		<Kontakt />
		<Cookies />
	</Layout>
);

export default KontaktPage;
