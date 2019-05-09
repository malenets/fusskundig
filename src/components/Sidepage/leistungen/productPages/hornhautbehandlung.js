import React from 'react';
import { Section, styles } from '../../../../utils';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "prod/hornhaut1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 800) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default function Hornhaut() {
	return (
		<StaticQuery
			query={SINGLE_IMAGE}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;

				return (
					<Section>
						<ProductWrapper>
							<h1 className="title">Hornhautbehandlung</h1>
							<h2 className="message">Für weiche und beschwerdenfreie Füße</h2>
							<Img fluid={img1} className="pic" />
							<h4 className="titlebelowpicture">Die Hornhautbehandlung umfasst:</h4>
							<ul className="list">
								<li>Abtragen von Hornhaut (Hyperkeratose)</li>
								<li>Behandlung von Schwielen (Colositas)</li>
								<li>Entfernen von Hühneraugen (Clavi)</li>
								<li>Behandlung von Fersenrissen (Rhagaden)</li>
							</ul>
							<h4 className="h4title">Nach Bedarf prüfen wir ebenfalls:</h4>
							<ul className="list">
								<li>das Virbationsempfinden mit der Stimmgabel</li>
								<li>das Kalt-/Warmempfinden mit dem Tip Therm</li>
								<li>Sensibilitätsstörungen mit dem Monofilament</li>
							</ul>
							<div className="section">
								<h3>Für Diabetiker</h3>
								<p className="info">
									Gerade bei Patienten mit dem Diabetischen Fußsyndrom (DFS) ist die Medizinische
									Fußpflege und der Gang zum Podologen häuftig der einzige Weg Schädigungen an den
									Füßen fachgerecht zu behandeln bzw. diesen nachhaltig vorzubeugen.
								</p>
								<p className="info">
									Die Podologische Hornhautbehandlung kann vom Arzt mit der Heilmittelverordnung 13
									verordnet werden, wenn es sich im Rahmen des diabetischen Fußsyndroms und Schädigung
									der Haut und Zehnnägel bei nachgewiesener Gefühls- und/oder Durchblutungsstörung der
									Füße handelt (Angiopathie bzw. Neuropathie). Bei Vorlage dieser Heilmittelverordnung
									wird die Behandlung von der Krankenkasse übernommen. Gegebenenfalls ist ein
									Eigenanteil vor Ort zu entrichten.
								</p>
							</div>
							<div className="section">
								<h3>Wie kommt es zur Hornhautbildung?</h3>
								<p className="info">
									Hornhaut ist etwas ganz natürliches und dient in erster zum Schutz der Füße. Sie
									entsteht in erster Linie an solchen Stellen, an denen die Haut stark beansprucht
									wird. Gründe für die Entstehung von Hornhaut, Schwielen oder Hühneraugen gibt es
									viele. Langes Stehen und falsches Schuhwerk können ebenso die Füße strapazieren, wie
									Reibungen oder ein Verletzung am Fuß oder Bewegungsaparat.
								</p>
							</div>
							<div className="section">
								<h3>Was können Sie tun?</h3>
								<p className="info">
									Richtiges und vorallem bequemes Schuhwerk kann ebenso wie regelmäßsiges Wechseln der
									Schuhe kann übermäßige Hornhaut bildung vermeiden. Bei Fehlstellungen empfehlen wir
									einlagen zu nutzen. Dies verhindert einseitigen Druck und Reibung. Nach dem Fußbad
									oder nach dem Duschen können Sie auch vorsichtig überschüssige Hornhaut mit einer
									Pfeile oder einem Bimsstein vorsichtig abtragen. Von Klingen oder Hobeln aus dem
									Drogeriemark raten wir ab. Hier kann eine ungeübte Hand schnell mehr schaden als
									helfen. Wenn Sie die Hornhautbehandlung lieber von einem Profi machen lassen möchten
									heißen wir Sie bei uns herzlich willkommen.
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
	.title {
		text-align: center;
	}
	.pic {
		width: 85%;
		display: flex;
		margin: auto;
	}
	.titlebelowpicture {
		margin-top: 2em;
	}
	.h4title {
		margin-top: 2em;
	}
`;
