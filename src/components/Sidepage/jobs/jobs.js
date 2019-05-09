import React, { Component } from 'react';
import { Section } from '../../../utils';
import styled from 'styled-components';
import { styles } from '../../../utils';
import Mail from '../../email';

export default class Jobs extends Component {
	render() {
		return (
			<Section>
				<JobWrapper>
					<h3 className="title">
						Wir sind immer auf der Suche nach neuen Kollegen und Kolleginnen zur Unterstützung unseres
						Teams.
					</h3>
					<ul>
						<li>Werden Sie Teil unseres jungen und dynamischen Teams, auf das wir sehr stolz sind</li>
						<li>
							All unsere Standorte sind zentral gelegen und sind gut ans das öffentliche Verkehrsnetz
							angebunden
						</li>
						<li>
							Unsere Praxen sind alle auf dem neusten Stand der Technik und bieten eine angenehme und
							helle Arbeitsatmosphere
						</li>
						<li>Fortbilding und Weiterentwickling wird bei uns groß geschrieben.</li>
						<li>Aufstiegsmöglichkeiten zur Praxisleitung.</li>
						<li>Flexible Arbeitszeiten und bieten Vollzeit, wie auch Teilzeit an</li>

						<li>Jährliche Teambilding Events sind bei unseren Kollegen immer sehr beliebt</li>
					</ul>
					<div className="underline" />
					<div>
						<h3>Das klingt interessant für Sie?</h3>
						<Grid>
							<div className="grid1">
								<h4>Sie sind</h4>
								<p>Engagement und Motivation </p>
								<p>Spaß an der Arbeit in einem jungem Team</p>
								<p>Digitale Dokumentation der therapeutischen Tätigkeit</p>
								<p>Patientenorientiertes Arbeiten</p>
							</div>
							<div className="grid2">
								<h4>und Sie bringen mit...</h4>
								<p>Abgeschlossene Berufsausbildung zum Staatl. gepr. Podologen </p>
								<p>Zusatzqualifikation "3 Teilige Spangentechnik" ist wünschenswert</p>
								<p>Fortbildungsbereitschaft</p>
								<p>Teamfähigkeit & Kommunikationsfähigkeit</p>
							</div>
						</Grid>
						<Mail />
					</div>
					<div className="underline" />
					<h2>Ausbildung</h2>
					<p>
						Wir bieten die Ausbildung zum staatl. gepr. Podologen in einem Dualen System an. Wir kooperieren
						mit verschiednen Podologieschulen in NRW. Während Ihrer Ausbildung bekommen Sie bereits ein
						angemessenes Gehalt, welches Ihnen ermöglicht die Schulkosten selber zu tragen.{' '}
					</p>
					<br />
					<h5>Unsere Kooperationspartner sind:</h5>
					<p>
						AFK Schule in Aachen
						<br />
						Diakonie in Kaiserswerth
						<br />
						Grotstollen in Essen
						<br />
						Podologieschule in Rheine
					</p>
					<div className="vorraus">
						<h3>Vorraussetzungen</h3>
						<ul>
							<li>Realschulabschluss oder eine abgeschlossene 3 Jährige Berufsausbildung</li>
							<li>Erweiterter Hauptschulabschluss und eine min. 2 Jährige Berufsausbildung</li>
							<li>Gesundheutszeugnis und Hepatitis B Impfung</li>
							<li>Positives Führungszeugnis</li>
							<li>Selbstständige Arbeitsweise</li>
							<li>
								Neigung zum helfenden, förderndem und anleitendem Umgang mit Menschen, sowie interesse
								an medizinischen Sachverhalten
							</li>
						</ul>
					</div>
					<h3 className="title">Bei Interesse melden Sie sich gerne bei uns</h3>
					<Mail />
					<div className="underline" />
					<h2>Über uns</h2>
					<p className="margin">
						Fußkunidg GbR wurde im Januar 2019 gegründet. <br />
						Das junge Unternehmen führt folgende Podologiefirmen und somit momentan 4 Praxen mit insgesamt
						40 Mitarbeitern unter einem Dachverband:
					</p>
					<p className="margin">
						<span>Fußkundig GbR</span>
						<br />
						mit einer Praxis in Düsseldorf-Bilk und ab Mitte 2019 mit einer Praxis in Heiligenhaus.
					</p>
					<p className="margin">
						<span>Schulmeister Podologie GmbH</span>
						<br />
						mit einer Praxis in Düsseldorf Gerresheim und einer Praxis in Ratingen Mitte.
					</p>
					<p>
						<span>P2 - Zentrum für Physiotherapie und Podologie</span>
						<br />
						mit einer Physio- und Podologiepraxis in Düsseldorf-Unterrath.
					</p>
				</JobWrapper>
			</Section>
		);
	}
}

const JobWrapper = styled.div`
	width: 80%;
	margin: 2rem auto;
	text-align: center;
	color: ${styles.colors.mainGrey};
	.vorraus {
		padding: 1rem;
		${styles.border({ color: `${styles.colors.mainGrey}` })};
		width: 65%;
		margin: 3rem auto;
	}
	span {
		font-weight: bold;
	}
	.offer {
		margin: 2rem;
		width: 100%;

		border: 1px solid black;
		text-align: left;
	}
	li {
		width: 60%;
		text-align: left;
		line-height: 1.5rem;
		margin: auto;
		@media (max-width: 900px) {
			width: 80%;
		}
		@media (max-width: 300px) {
			width: 95%;
		}
	}
	.margin {
		margin-bottom: 1.5rem;
	}
	.underline {
		width: 50%;
		height: 0.2rem;
		background: ${styles.colors.mainGrey2};
		margin: 3rem auto;
	}
	.title {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}
`;

export const Grid = styled.div`
	display: grid;
	width: 85%;
	grid-template-columns: auto;
	grid-row-gap: 1rem;
	@media (min-width: 576px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1rem;
	}
	text-align: left;
	margin: 2rem auto;
	.grid1 {
		padding: 1rem;
		${styles.border({ color: `${styles.colors.mainGrey}` })};
	}
	.grid2 {
		padding: 1rem;
		${styles.border({ color: `${styles.colors.mainGrey}` })};
	}
`;
