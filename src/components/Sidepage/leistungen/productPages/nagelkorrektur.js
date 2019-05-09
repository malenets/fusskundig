import React from 'react';
import { Section, styles } from '../../../../utils';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "prod/vho-sprange1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 800) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default function Nagelkor() {
	return (
		<StaticQuery
			query={SINGLE_IMAGE}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;

				return (
					<Section>
						<ProductWrapper>
							<h1 className="title">VHO - Nagelkorrekturspange</h1>
							<h2 className="message">dauerhafte Korrektur von Roll- und eingewachsenen Nägeln</h2>
							<Img fluid={img1} className="pic" />
							<ul className="list">
								<li>Manche Nägel neigen dazu an den Seiten ins Fleisch zu wachsen (Rollnagel)</li>
								<li>Das Setzen einer Nagelspange kann dieses Probelm dauerhaft lösen</li>
								<li>Dieses Vorgehen ist praktisch ohne Schmerzen</li>
								<li>Besonders geeignet für Sportler, sowie Kinder und Jugentliche</li>
							</ul>
							<div className="section">
								<h3>Funktionsweise</h3>
								<p className="info">
									Zwei Spangenschenkel aus Federstahl werden vom Podologen mit kleinen Häkchen
									versehen und unter die Nagelränder eingebracht. Diese werden mit einer
									Mittelschlaufe miteinander verbunden. Das Verdrillen der Mittelschlaufe bewirkt ein
									leichtes Anheben der Nagelränder, wodurch das umliegende Gewebe entlastet wird. Das
									natürliche Wachstum wird unterstützt und der Nagel wieder in Form gebracht. Die
									Nagelkorrekturspange wird in der Regel nicht länger als ein Jahr getragen.
								</p>
								<p>
									Die Spange wird einmalig angefertigt und angebracht und wächst dann mit der Zeit
									heraus. Aus diesem Grund muss diese alle 4 Wochen in der Nachsorgebehandlung wieder
									an die richtige stelle gesetzt werden.
								</p>
								<p>Wir verwenden ausschließlich die Markenprodukte der Firma 3to GmbH.</p>
							</div>
							<div className="section">
								<h3>Preise</h3>
								<p className="paragraph">Alle angegebenen Preise gelten je Nagel.</p>
								<div className="info price">
									<h4>Die VHO-NagelKorrekturspange: 120,00€</h4>
									<p>
										Dies beinhaltet die Spange und das individuelle Anpassen und Aufsetzen an den
										Nagel.
									</p>
									<h4>Nachsorgebehandlung (Versetzen der Spange): 11,00€</h4>
									<p>
										Dies ist ca. alle 4 Wochen notwendig um die Spange wieder an die richtige stelle
										zu setzen. Bitte beachten Sie das wir das Versetzen nur in Verbindung mit einer
										Podologischen Komplexbehandlung anbieten.
									</p>
									<h4>Absetzen/Entfernung der Nagelkorrekturspange: 21,00€</h4>
									<p>Am Ende der Behandlungszeit</p>
								</div>
								<p>
									Bitte beachten Sie, dass wir keine Garantie auf den dauerhaften verbleib der Spange
									auf dem Nagel geben können. In Ausnahmefällen kann sich eine Spange vom Zeh wieder
									lösen. Wenn Sie die Spange noch haben berechnen wir für das erneute Aufsetzen eine
									Gebühr von 35,00€. Beim Verlust der Spange muss leider eine neue Spange berechnet
									werden. <br />Wir tun jedoch unser bestes damit dies nicht passiert.
								</p>
							</div>
							<div className="section">
								<h3>Krankenkasse</h3>
								<p className="info">
									Diese Therapie rechnen wir nicht mit der Krankenkasse direkt ab. Sie erhalten aber
									auf Wunsch eine Gesamtrechnung nach Ende der Therapie, welche alle Gebühren
									auflistet die Sie an uns entrichtet haben.
								</p>
								<p>
									Mit dieser Gesamtrechnung können Sie im Anschluss ggf. mit Ihrer Krankenkasse
									abrechnen. Sprechen Sie bitte im Vorfeld mit Ihrer Krankenkasse, um mögliche
									Zuzahlungen abzuklären.
								</p>
							</div>
							<div className="section">
								<h3>Warum Fußkundig</h3>
								<p className="info">
									Wir von Fußkundig sind der Überzeugung, dass niemand mit schmerzenden Füßen seinen
									Alltag bestreiten sollte. Ganz egal ob es sich um einen eingewachsenen Nagel,
									Druckstellen, Hühneraugen, einen Hartnäckigen Nagelpilz, das Diabetische Fußsyndrom
									oder das Setzen einer Nagelkorrekturspange hantelt, es braucht oft nur eine
									geschulte Hand und ein freundliches lächeln um Ihnen den Tag zu retten und schmerzen
									zu beseitigen.
								</p>

								<p>
									Handeln sollte man in jedem Fall lieber früher als später und darum sind wir mit
									unserem Team für Sie da. Selbstverständlich sind höchste hygienische Standards
									unsere Priorität. Die Aufbereitung der Instrumente erfolgt zuerst durch einen
									Thermodesinfektor. Danach werden die Instrumente Folienverschweißt und im Autoklav
									Dampfdrucksterilisert. Dieses Prozedere ermöglicht ein Höchstmaß an Hygiene und
									macht das übertragen von Keinem, Pilzen und Vieren unmöglich.
								</p>
							</div>
						</ProductWrapper>
					</Section>
				);
			}}
		/>
	);
}

const ProductWrapper = styled.div`
	color: ${styles.colors.mainGrey};
	width: 95%;
	margin: auto;
	.section {
		margin: 3rem auto;
	}
	@media (min-width: 768px) {
		width: 90%;
	}
	@media (min-width: 900px) {
		width: 80%;
	}
	.message {
		color: ${styles.colors.mainGrey2};
		text-align: center;
		font-size: 1.5rem;
	}
	.list {
		margin-left: 2rem;
		margin-top: 2rem;
		font-size: 1.2rem;
		line-height: 2rem;
	}
	.title {
		text-align: center;
		width: 85%;
		margin: 1rem auto;
	}
	.pic {
		width: 85%;
		display: flex;
		margin: auto;
	}
	h4 {
		font-size: 1.3rem;
	}
	.price {
		margin: 2rem;
	}
`;
