import React, { Component } from 'react';
import { Section } from '../../../utils';
import styled from 'styled-components';
import { styles } from '../../../utils';

export default class Kontakt extends Component {
	render() {
		return (
			<Section>
				<KontaktWrapper>
					<div className="kontakt">
						<h3>kontakt</h3>
						<h5 className="month">Telefon</h5>
						<a href="tel: +49211428881" className="tlf" target="_blank" rel="noopener noreferrer">
							0211 / 428881
						</a>
						<h5 className="month">Fax</h5>
						<p className="text">0211 / 51801190</p>
						<h5 className="month">E-Mail</h5>
						<a className="tlf" href="mailto: info@fusskundig.de" target="_blank" rel="noopener noreferrer">
							info@fusskundig.de
						</a>
						<div className="underline" />
					</div>
					<div className="adresse">
						<h3 className="title">adresse</h3>
						<p className="expl str">
							Sie finden uns in der Fußambulanz des Martinus Krankenhauses in Düsseldorf-Bilk
						</p>
						<a
							className="str under"
							href="https://goo.gl/maps/YyJYak5VnCEFg6Rq6"
							target="_blank"
							rel="noopener noreferrer"
						>
							Gladbacher Str. 26 <br />
							40219 Düsseldorf
						</a>

						<div className="underline" />
					</div>
					<div className="adresse">
						<h3>öffnungszeiten</h3>
						<h5 className="text">Montag</h5>
						<p className="text montag">9.00 Uhr - 18.00 Uhr</p>
						<h5 className="month">Dienstag</h5>
						<p className="text">9.00 Uhr - 16.00 Uhr</p>
						<h5 className="month">Mittwoch</h5>
						<p className="text">9.00 Uhr - 18.00 Uhr</p>
						<h5 className="month">Donnerstag</h5>
						<p className="text">9.00 Uhr - 18.00 Uhr</p>
						<h5 className="month">Freitag</h5>
						<p className="text">9.00 Uhr - 16.00 Uhr</p>
					</div>
				</KontaktWrapper>
			</Section>
		);
	}
}

const KontaktWrapper = styled.div`
	width: 90%;
	margin: 2rem auto;
	.text {
		line-height: 3rem;
		color: ${styles.colors.mainGrey};
		word-spacing: 0.2rem;
		${styles.letterSpacing({ spacing: '0.2rem' })};
		text-align: center;
	}
	.underline {
		width: 50%;
		height: 0.2rem;
		background: ${styles.colors.mainGrey2};
		margin: 0.5rem auto;
		margin-top: 1.5rem;
	}
	.str {
		color: ${styles.colors.mainGrey};
		word-spacing: 0.2rem;
		${styles.letterSpacing({ spacing: '0.2rem' })};
		text-align: center;
	}
	.under {
		margin-bottom: 2rem;
		font-weight: bold;
		line-height: 2rem;
		display: block;
		text-decoration: none;
		&:hover {
			color: ${styles.colors.mainGrey2};
			cursor: pointer;
			font-size: 1.1rem;
		}
	}
	.expl {
		margin-bottom: 2rem;
		line-height: 1.5rem;
		font-weight: 400;
	}
	.month {
		line-height: 1rem;
		color: ${styles.colors.mainGrey};
		word-spacing: 0.2rem;
		${styles.letterSpacing({ spacing: '0.2rem' })};
		text-align: center;
		margin-top: 1.5rem;
	}
	.montag {
		line-height: 1rem;
		margin-bottom: 2.2rem;
	}
	@media (min-width: 768px) {
		width: 70%;
	}
	@media (min-width: 900px) {
		width: 60%;
	}
	h3 {
		text-align: center;
		text-transform: uppercase;
	}
	.adresse {
		margin-top: 2rem;
		margin-bottom: 3rem;
	}
	.title {
		margin-bottom: 1rem;
	}
	.kontakt {
		text-align: center;
		margin-top: 3rem;
	}
	.tlf {
		text-decoration: none;
		color: ${styles.colors.mainGrey};
		word-spacing: 0.2rem;
		line-height: 3rem;
		${styles.letterSpacing({ spacing: '0.2rem' })};
		&:hover {
			color: ${styles.colors.mainGrey2};
			cursor: pointer;
			font-weight: bold;
		}
	}
`;
