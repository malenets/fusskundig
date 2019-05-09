import React from 'react';
import { Section, styles } from '../../../../utils';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "prod/komplexbehandlung1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 800) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default function PodKomp() {
	return (
		<StaticQuery
			query={SINGLE_IMAGE}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;

				return (
					<Section>
						<ProductWrapper>
							<h1 className="title">Podologische Komplexbehandlung</h1>
							<h2 className="message">Die Fußpflege bei Problemen und für Diabetiker</h2>
							<Img fluid={img1} className="pic" />
							<h4 className="titlebelowpicture">Die Podologische Komplexbehandlung umfasst:</h4>
							<ul className="list">
								<li>
									{' '}
									Nagelbehandlung:
									<ul className="list2">
										<li>Richtiges Schneiden der Nägel</li>
										<li>Korrektur von eingewachsenen Nägeln (Unguis incarnatus)</li>
										<li>Behandlung von Nagelpilz (Nagelmykosen)</li>
										<li>Abschleifen und Glätten von verdickten Nägeln (Onychauxis)</li>{' '}
									</ul>
								</li>
								<li>Abtragen von Hornhaut (Hyperkeratose)</li>
								<li>Entfernen von Hühneraugen (Clavi)</li>
								<li>Behandlung von Fersenrissen (Rhagaden)</li>
								<li>Warzenbehandlung (Verrucae)</li>
								<li>Beratung über Schuhwerk, Strümpfe und Pflege</li>
							</ul>
							<h4 className="h4title">Nach Bedarf prüfen wir ebenfalls:</h4>
							<ul className="list">
								<li>das Virbationsempfinden mit der Stimmgabel</li>
								<li>das Kalt-/Warmempfinden mit dem Tip Therm</li>
								<li>Sensibilitätsstörungen mit dem Monofilament</li>
							</ul>
							<ul />
							<div className="section">
								<h3>Für Diabetiker</h3>
								<p className="info">
									Gerade bei Patienten mit dem Diabetischen Fußsyndrom (DFS) ist die Medizinische
									Fusspflege und der Gang zum Podologen häuftig der einzige Weg Schädigungen an den
									Füßen fachgerecht zu behandeln bzw. diesen nachhaltig vorzubeugen.
								</p>
								<p className="info">
									Die Podologische Komplexbehandlung kann vom Arzt mit der Heilmittelverordnung 13
									verordnet werden, wenn es sich im Rahmen des diabetischen Fußsyndroms und Schädigung
									der Haut und Zehnnägel bei nachgewiesener Gefühls- und/oder Durchblutungsstörung der
									Füße handelt (Angiopathie bzw. Neuropathie). Bei Vorlage dieser Heilmittelverordnung
									wird die Behandlung von der Krankenkasse übernommen. Gegebenenfalls ist ein
									Eigenanteil vor Ort zu entrichten.
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
		margin: 2rem;
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
	.list2 {
		margin-left: 1.7rem;
	}
	.titlebelowpicture {
		margin-top: 2em;
	}
	.h4title {
		margin-top: 2em;
	}
`;
