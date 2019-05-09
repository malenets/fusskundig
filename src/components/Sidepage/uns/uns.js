import React, { Component } from 'react';
import { Section, Title, SectionButton } from '../../../utils';
import styled from 'styled-components';
import { styles } from '../../../utils';
import { Link } from 'gatsby';

export default class Uns extends Component {
	render() {
		return (
			<Section>
				<Title message="warum Fußkundig?" title="FÜßE AUF DIE SIE STOLZ SEIN KÖNNEN" />
				<UnsWrapper>
					<p className="embarrassed">Sie sollten sich nicht für Ihre Füße schämen müssen.</p>
					<p className="proud">
						Sie sollten stolz auf sie sein können. <br /> Entspannen Sie sich mit der Gewissheit, dass Ihre
						Füße bei uns in besten Händen sind.
						<br />
						Ihr Füße sind es, die Ihren Körper tragen. Nur eine gesunde und schmerzfreie Basis ermöglicht
						vollkommende Zufriedenheit.
						<br />
					</p>
					<p className="mission">
						Füße sind unsere Passion und unser Auftrag ist es Ihnen den Schmerz zu nehmen damit Sie stolz
						auf Ihre Füße sein können.
					</p>
					<p className="service">
						Darum bieten wir Ihnen ein breites Angebot an hochqualitativen Leistungen der
						Podologie/Medizinischen Fusspflege an.
						<br />
						Freundliches und qualifiziertes Personal, sowie die beiden sehr erfahrenen Gründer, welche trotz
						des noch recht jungen Alters bereits auf 29 Jahre Erfahung zurückgreifen können,
						<br />
						sind stets für Sie da.
					</p>
					<h4>Es ist so einfach!</h4>
					<p className="process">
						Machen Sie noch heute einen Termin <br />
						Genießen Sie unsere Dienstleistungen
						<br />
						und seien Sie endlich schmerzfrei und stolz auf Ihre Füße!
					</p>
					<a href="tel: +49211428881" style={{ textDecoration: 'none' }}>
						<SectionButton style={{ margin: '1rem auto' }}>
							Termin vereinbaren: 0211 / 428881
						</SectionButton>{' '}
					</a>
					<p className="leistungen">Oder lesen Sie mehr über unser Angebot hier:</p>
					<Link to="/leistungen/" style={{ textDecoration: 'none' }}>
						<SectionButton style={{ margin: '1rem auto' }}>Leistungen</SectionButton>{' '}
					</Link>
				</UnsWrapper>
			</Section>
		);
	}
}

const UnsWrapper = styled.div`
	text-align: center;
	width: 90%;
	margin: 2rem auto;
	align-content: center;
	color: ${styles.colors.mainGrey};
	.embarrassed {
		margin-bottom: 2rem;
	}
	.proud {
		margin-bottom: 2rem;
	}
	.mission {
		margin-bottom: 2rem;
	}
	.leistungen {
		margin-top: 4rem;
	}
	@media (min-width: 768px) {
		width: 70%;
	}
	@media (min-width: 900px) {
		width: 60%;
	}
	.process {
		line-height: 1.5rem;
	}
	h4 {
		margin-top: 4rem;
		margin-bottom: 1rem;
	}
	.tu {
		margin-bottom: 1rem;
	}
`;
