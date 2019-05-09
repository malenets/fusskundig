import React, { Component } from 'react';
import { Section, Title } from '../../../utils';
import styled from 'styled-components';
import { styles } from '../../../utils';

export default class Prob3 extends Component {
	render() {
		return (
			<Section>
				<Prob3Wrapper>
					<p>
						Nach dem Ausbildungsziel sind Podologinnen und Podologen befähigt, durch Anwendung geeigneter
						Verfahren nach den anerkannten Regeln der Hygiene allgemeine und spezielle fußpflegerische
						Maßnahmen selbstständig auszuführen, pathologische Veränderungen oder Symptome von Erkrankungen
						am Fuß, die eine spezielle ärztliche Abklärung erfordern, zu erkennen, unter ärztlicher
						Anleitung oder auf ärztliche Veranlassung medizinisch indizierte podologische Behandlungen
						durchzuführen und damit bei der Prävention, Therapie und Rehabilitation von Fußerkrankungen
						mitzuwirken.
					</p>
					<p>
						Früher kannten Sie uns als "Med. Fußpfleger/innen". In dieses Aufgabenfeld fallen unsere
						Tätigkeiten, jedoch sind Podologen besser ausgebildet und können daher auf Probleme mit den
						Füßen, wie z.B. bei Diabetikern besser reagieren und behandeln. Die Podologie ist somit der neue
						Oberbegriff für die medizinische Fußpflege. Der Gesetzgeber schreibt diese neue Bezeichnung für
						medizinische Fußpfleger vor.
					</p>
					<p>
						Es dürfen nur Podologen mit den Krankenkassen abrechnen, aber nicht alle Podologen nehmen diesen
						Kraftakt auf sich. Bei Schulmeister Podologie GmbH rechnen wir bei Vorlage einer
						Heilmittelverordnung mit jeder Krankenkasse ab. Das heißt, Sie zahlen nur Ihren Eigenanteil. Im
						Regelfall bekommen nur Diabetiker eine Verordnung Ihres Hausarztes oder Ihres Diabetologen
						verschrieben.
					</p>
				</Prob3Wrapper>
			</Section>
		);
	}
}

const Prob3Wrapper = styled.div`
	width: 80%;
	margin: 2rem auto;
	text-align: center;
	color: ${styles.colors.mainGrey};
`;
