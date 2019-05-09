import React, { Component } from 'react';
import { Section, Title } from '../../../utils';
import styled from 'styled-components';
import { styles } from '../../../utils';
import Mail from '../../email';

export default class Franchise extends Component {
	render() {
		return (
			<Section>
				<Title message="Die Fußkundig-Formel" title="FRANCHISE" />
				<FranWrapper>
					<p>
						Fußkundig führt bereits erfolgreich mehrere Podlogiefirmen in einem Dachverband. Unser Ziel ist
						es, ein reproduzierbares und langfristig erfolgreiches Franchiseszstem auf dem Deutschen Markt
						zu etablieren. Wir möchten Menschen, denen das Wohl Ihrer Patienten genauso am Herzen liegt wie
						uns, den Start in die Selbstständigkeit in der Heilmittel-Branche ermöglichen. Wir arbeiten
						daran ein System All-Inklusive System zu entwicklen. Alles was Sie brauchen ist eine Lokalität,
						einen Behandlungsstuhl, eine Portion Motivation und die Freude Menschen zu helfen. Instrumente
						samt Reiningung, Onlineauftritt, Marketing Material und nicht zuletzt unseren guten Namen an der
						Tür wird Ihnen zur Verfügung gestellt.
					</p>
					<Mail />
				</FranWrapper>
			</Section>
		);
	}
}

const FranWrapper = styled.div`
	width: 80%;
	margin: 2rem auto;
	text-align: center;
	color: ${styles.colors.mainGrey};
`;
