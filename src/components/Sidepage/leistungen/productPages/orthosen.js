import React from 'react';
import { Section, styles } from '../../../../utils';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "prod/orthosen1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 800) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default function Orth() {
	return (
		<StaticQuery
			query={SINGLE_IMAGE}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;

				return (
					<Section>
						<ProductWrapper>
							<h1 className="title">Orthosen</h1>
							<h2 className="message">Die Abhilfe bei Zeh-Fehlstellungen aller Art </h2>
							<Img fluid={img1} className="pic" />
							<ul className="list">
								<li>
									Individuell gefertigte Hilfsmittel für korrekturbedürftige und schmerzende Zehen
								</li>
								<li>Dient der Druckentlastung</li>
								<li>Besonders geeignet zur Korrektur von Hammer- und Krallenzehen.</li>
								<li>Orthosen kommen ebenfalls als Ersatzstücke bei fehlenden Zehen zum Einsatz</li>
							</ul>
							<div className="section">
								<h3>Wir beraten Sie gerne persönlich</h3>
								<p className="info">
									Da Orthosen in jedem Fall eine individuelle Sonderanfertigung sind können wir leider
									keine pauschalen Aussagen über Preise und Umfang nennen. Wir beraten Sie aber gerne
									vor Ort und unserer Praxis in Düsseldorf-Bilk. <br />
									Wir empfehlen einen Termin telefonisch zu vereinbaren damit wir sicher stellen
									können das wir genug Zeit für Sie bereit stellen können.
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
	}
	.pic {
		width: 85%;
		display: flex;
		margin: auto;
	}
`;
