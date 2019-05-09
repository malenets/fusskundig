import React from 'react';
import styled from 'styled-components';
import { styles } from '../../../utils';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "prod/komplexbehandlung1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img2: file(relativePath: { eq: "prod/nagelbearbeitung1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img3: file(relativePath: { eq: "prod/hornhaut1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img4: file(relativePath: { eq: "prod/nagelprothetik.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img5: file(relativePath: { eq: "prod/teil-akut1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img6: file(relativePath: { eq: "prod/vho-sprange1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img7: file(relativePath: { eq: "prod/onyfix2.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img8: file(relativePath: { eq: "prod/fussmassage1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img9: file(relativePath: { eq: "prod/orthosen1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img10: file(relativePath: { eq: "prod/analyse1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default function Product() {
	return (
		<StaticQuery
			query={SINGLE_IMAGE}
			render={(data) => {
				const img1 = data.img1.childImageSharp.fluid;
				const img2 = data.img2.childImageSharp.fluid;
				const img3 = data.img3.childImageSharp.fluid;
				const img4 = data.img4.childImageSharp.fluid;
				const img5 = data.img5.childImageSharp.fluid;
				const img6 = data.img6.childImageSharp.fluid;
				const img7 = data.img7.childImageSharp.fluid;
				const img8 = data.img8.childImageSharp.fluid;
				const img9 = data.img9.childImageSharp.fluid;
				const img10 = data.img10.childImageSharp.fluid;

				return (
					<ProductWrapper>
						<div className="prod prod-1">
							<Link to="/komplexbehandlung/">
								<Img fluid={img1} className="blur" />
								<h2 className="title">Podologische Komplexbehandlung</h2>
								<h4 className="price">33€</h4>
							</Link>
						</div>
						<div className="prod prod-2">
							<Link to="/nagelbearbeitung/">
								<Img fluid={img2} className="blur" />
								<h2 className="title">Nagelbehandlung</h2>
								<h4 className="price">23€</h4>
							</Link>
						</div>
						<div className="prod prod-3">
							<Link to="/hornhautbehandlung/">
								<Img fluid={img3} className="blur" />
								<h2 className="title">Hornhautbehandlung</h2>
								<h4 className="price">23€</h4>
							</Link>
						</div>
						<div className="prod prod-4">
							<Link to="/nagelprothetik/">
								<Img fluid={img4} className="blur" />
								<h2 className="title">Nagelprothetik</h2>
								<h4 className="price">17€</h4>
							</Link>
						</div>
						<div className="prod prod-5">
							<Link to="/teil/">
								<Img fluid={img5} className="blur" />
								<h2 className="title">Teil- und Akutbehandlung</h2>
								<h4 className="price">15-23€</h4>
							</Link>
						</div>
						<div className="prod prod-6">
							<Link to="/nagelkorrektur/">
								<Img fluid={img6} className="blur" />
								<h2 className="title">
									VHO - <span>Nagelkorrekturspange</span>
								</h2>
								<h4 className="price">120€</h4>
							</Link>
						</div>
						<div className="prod prod-7">
							<Link to="/onyfix/">
								<Img fluid={img7} className="blur" />
								<h2 className="title">
									Onyfix <span>Nagelkorrektursystem</span>
								</h2>
								<h4 className="price">45€</h4>
							</Link>
						</div>
						<div className="prod prod-8">
							<Link to="/fussmassage/">
								<Img fluid={img8} className="blur" />
								<h2 className="title">Fußmassage</h2>
								<h4 className="price">19€</h4>
							</Link>
						</div>
						<div className="prod prod-9">
							<Link to="/orthosen/">
								<Img fluid={img9} className="blur" />
								<h2 className="title">Orthosen</h2>
								<h4 className="price">nach Aufwand</h4>
							</Link>
						</div>
						<div className="prod prod-10">
							<Link to="/beratung/">
								<Img fluid={img10} className="blur" />
								<h2 className="title">Beratung und Fußanalyse</h2>
								<h4 className="price">15€</h4>
							</Link>
						</div>
					</ProductWrapper>
				);
			}}
		/>
	);
}

const ProductWrapper = styled.div`
	margin: 3rem 0;
	display: grid;
	grid-template-columns: 100%;
	grid-row-gap: 3rem;
	@media (min-width: 300px) {
		grid-template-columns: 90%;
		justify-content: center;
	}
	@media (min-width: 600px) {
		grid-template-columns: 1fr 1fr;
		justify-content: space-between;
		.prod {
			padding: 0.5rem;
		}
	}
	@media (min-width: 776px) {
		grid-template-columns: 1fr 1fr;
		justify-content: space-between;
		.prod {
			padding: 0.5rem;
		}
	}
	@media (min-width: 992px) {
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 2rem;
		justify-content: center;
	}
	.prod {
		position: relative;
		&:hover {
			img {
				-webkit-filter: blur(4px);
				filter: blur(4px);
			}
		}
	}
	.price {
		position: absolute;
		bottom: 1rem;
		right: 1rem;
		color: ${styles.colors.mainWhite};
		padding: 0.1rem 0.3rem;
		background: rgba(0, 0, 0, 0.3);
		font-size: 1.25rem;
	}
	.title {
		position: absolute;
		right: 1rem;
		top: 2rem;
		left: 1rem;
		text-align: center;
		color: ${styles.colors.mainWhite};
		padding: 0.1rem 0.3rem;
		text-transform: capitalize;
		font-size: 1.75rem;
		font-weight: lighter;
		background: rgba(0, 0, 0, 0.3);
	}
	span {
		font-size: 1.65rem;
	}
`;
