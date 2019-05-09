import React from 'react';
import { Section, styles } from '../../../../utils';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import OnyGrid from './prodGrid';
import OnyGrid2 from './prodGrid2';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "prod/onyfix2.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 800) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default function OnyfixNagel() {
	return (
		<StaticQuery
			query={SINGLE_IMAGE}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;

				return (
					<Section>
						<ProductWrapper>
							<h1 className="title">Onyfix Nagelkorrektursystem</h1>
							<h2 className="message">
								Schmerzfreie Behandlung von eingewachsenen und eingerollten Nägeln
							</h2>
							<Img fluid={img1} className="pic" />
							<ul className="list">
								<li>Vielseitg und Innovativ</li>
								<li>Schmerzfreie Behandlung von eingerollten oder eingewachsenen Zehen</li>
								<li>Führt den Nagel durch physiologisches Wachstum in seine natürliche Form zurück</li>
							</ul>
							<div className="section">
								<h3>Wie wird das Onyfix System angewendet?</h3>

								<OnyGrid />
							</div>
							<div className="section">
								<h3>Wie funktioniert das Onyfix System?</h3>

								<OnyGrid2 />
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
		font-size: 1.5;
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
`;
