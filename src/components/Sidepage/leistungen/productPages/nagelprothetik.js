import React from 'react';
import { Section, styles } from '../../../../utils';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "prod/nagelprothetik.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 800) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default function NagelPro() {
	return (
		<StaticQuery
			query={SINGLE_IMAGE}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;

				return (
					<Section>
						<ProductWrapper>
							<h1 className="title">Nagelprothetik</h1>
							<h2 className="message">Der künstliche Fußnagel - die optische Aufbesserung</h2>
							<Img fluid={img1} className="pic" />
							<ul className="list">
								<li>
									Modelierung eines künstichen Nagels nach Verlust durch Chirurgischen Eingriff,
									starkem Pilzbefall oder einer Verletzung
								</li>
								<li>Abhilfe bei deformierten Fußnägeln</li>
								<li>Ergänzung des Fußnagels</li>
								<li>Gleicht optisch einem natürlich gewachsenem Nagel</li>
							</ul>

							<div className="section">
								<h3>Wie funktioniert die Nagelprothetik?</h3>
								<p className="info">
									Wir verwenden ein spezielles Gel um Ihren Künstlichen Nagel zu modelieren. So können
									wir uns an jede Gegebenheit anpassen und sind nicht auf vorgefertigte Formen
									angewiesen. Wenn die Prothese ausgehärtet ist bieten sie einen optimalen Schutz und
									steht einem echtem Nagel in nichts nach. Der Künstliche Nagel wächstproblemlos mit
									raus. Die Nagelprothese kann problem lackiert werden.
								</p>
							</div>

							<div className="section">
								<h3>Nicht nur eine Sache der Ästhetik</h3>
								<p className="info">
									Wir wissen wie belastend ein deformierter Nagel für unsere Patienten sein kann.
									Daher ist die Nagelprothetik nicht nur eine Sache der Ästhetik, sondern bietet auch
									eine wertvolle psychologische Unterstützung für Menschen die von Nagelproblemen
									betroffen sind. Endlich wieder Barfuß laufen oder offene Schuhe tragen, steigert so
									die Lebensqualität ungemein.
								</p>
							</div>

							<div className="section">
								<h3>In folgenden Fällen kann die Nagelprothetik nicht angewand werden</h3>
								<p className="info">
									<ul className="listtext">
										<li>Wenn die Wunde am Zeh noch nicht vollständig verheilt ist</li>
										<li>Bei schweren Durchblutungsstörungen</li>
										<li>
											Bei Diabetis Mellitus (Insulmangel oder verminderte Insulinwirkung) mit
											Gewebenekrosen (Schädigung der Zellstruktur)
										</li>
										<li>Bei Pilzbefall des Nagel</li>
										<li>
											Generall muss immer ein wenig vom Nagel noch vorhanden sein, damit die
											Prothese einen gewissen Halt hat
										</li>
									</ul>
								</p>
							</div>

							<div className="section">
								<h3>Warum Fußkundig</h3>
								<p className="info">
									Wir von Fußkundig sind der Überzeugung, dass niemand mit schmerzenden Füßen seinen
									Alltag bestreiten sollte. Ganz egal ob es sich um einen eingewachsenen Nagel,
									Druckstellen, Hühneraugen, einen Hartnäckigen Nagelpilz oder das Diabetische
									Fußsyndrom hantelt, es braucht oft nur eine geschulte Hand und ein freundliches
									lächeln um Ihnen den Tag zu retten und schmerzen zu beseitigen.
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
	.listtext {
		margin-left: 1rem;
	}
	.title {
		text-align: center;
	}
	.pic {
		width: 85%;
		display: flex;
		margin: auto;
	}
`;
