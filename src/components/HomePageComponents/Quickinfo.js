import React, { Component } from 'react';
import { Section, Title, SectionButton } from '../../utils';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { styles } from '../../utils';

export default class Quickinfo extends Component {
	render() {
		return (
			<Section>
				<Title message="Ihre Zufriedenheit ist" title="UNSER AUFTRAG" />
				<QuickinfoWrapper>
					<p className="text">
						Unser engagiertes und kompetentes Team unterstützt Sie gerne dabei, Ihre Füße langfristig fit
						und gesund zu halten und natürlich auch optisch zu verschönern. <br /> Wir arbeiten eng mit
						Diabetologen, Orthopäden, Dermatologen, Allgemeinmedizinern und der Fußambulanz zusammen um eine
						optimale Behandlung für Ihre Bedürfnisse und Wünsche zu finden.
					</p>
					<Link to="/uns/" style={{ textDecoration: 'none' }}>
						<SectionButton style={{ margin: '2rem auto' }}>Über Uns</SectionButton>{' '}
					</Link>
				</QuickinfoWrapper>
			</Section>
		);
	}
}

const QuickinfoWrapper = styled.div`
	width: 90%;
	margin: 2rem auto;
	.text {
		line-height: 2rem;
		color: ${styles.colors.mainGrey};
		word-spacing: 0.2rem;
		text-align: center;
	}
	@media (min-width: 768px) {
		width: 70%;
	}
	@media (min-width: 900px) {
		width: 60%;
	}
`;
