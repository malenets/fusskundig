import React from 'react';
import { Section, styles } from '../../../../utils';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "prod/teil-akut1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 800) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default function Teil() {
	return (
		<StaticQuery
			query={SINGLE_IMAGE}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;

				return (
					<Section>
						<ProductWrapper>
							<h1 className="title">Teil- und Akutbehandlung</h1>
							<h2 className="message">Gezielte und schnelle Hilfe bei akuten Problemen</h2>
							<Img fluid={img1} className="pic" />
							<ul className="list">
								<li>Behandlung von eingewachsenen Nägeln (Inguis Incarnatus)</li>
								<li>Nagelpilzbehandlung einzelner Nägel (Mykose)</li>
								<li>Behandlung von Warzen (Verrucae)</li>
								<li>Entfernung von Hühneraugen (Clavi)</li>
								<li>Behandlung von Rissen in der Hornhaut (Rhagaden)</li>
							</ul>
							<div className="section">
								<h3>Warum eine Teilbehandlung?</h3>
								<p className="info">
									Eine Teil bzw. Akutbehandlung kommt immer dann zum Einsatz, wenn es sich nur um ein
									bestimmtes, meist akutes Problem handelt wie z.B. das Behandeln eines eingewachsenen
									Nagels, es wird aber keine komplette Nagelbehandlung gewünscht oder benötigt.
								</p>
								<p>
									Sollten Sie mehrere Problemstellen haben, empfehlen wir eine Nagel, Hornhaut oder
									Komplexbehandlung. Hierbei wird mehr Zeit einkalkuliert und man kann sich um Ihre
									Füße komplett kümmern. Wenn Sie sich unsicher sind, können Sie uns gerne anrufen und
									wir beraten Sie gerne am Telefon.
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
`;
