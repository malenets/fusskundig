import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { Section } from '../../../../utils';
import Img from 'gatsby-image';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "morepic/2.1.PNG" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img2: file(relativePath: { eq: "morepic/2.2.PNG" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img3: file(relativePath: { eq: "morepic/2.3.PNG" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img4: file(relativePath: { eq: "morepic/2.4.PNG" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default function OnyGrid() {
	return (
		<StaticQuery
			query={SINGLE_IMAGE}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;
				const img2 = data.img2.childImageSharp.fluid;
				const img3 = data.img3.childImageSharp.fluid;
				const img4 = data.img4.childImageSharp.fluid;
				return (
					<Section>
						<OnyWrapper>
							<div className="item">
								<Img fluid={img1} />
								<h5>Vorbereiten </h5>
								<p>
									Der Nagel wird leicht angeraut, mit dem Onyfix Primer bestrichen und miz der LED
									Blaulichtlampe getrocknet
								</p>
							</div>
							<div className="item">
								<Img fluid={img2} />
								<h5>Auftragen</h5>
								<p>Das Onyfix Nagelkorrektursystem auf den Nagel aufgetragen</p>
							</div>
							<div className="item">
								<Img fluid={img3} />
								<h5>Formen</h5>
								<p>Anschließend wird das System in seine richtige Form gebracht</p>
							</div>
							<div className="item">
								<Img fluid={img4} />
								<h5>Aushärten</h5>
								<p>Das Onyfixsystem wird mit Hilfe der Blaulicht Lampe ausgehärtet</p>
							</div>
						</OnyWrapper>
					</Section>
				);
			}}
		/>
	);
}

const OnyWrapper = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-row-gap: 1rem;
	width: 80%;
	.item {
		position: relative;
	}
	@media (min-width: 576px) {
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 1rem;
	}
	@media (min-width: 768px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`;
