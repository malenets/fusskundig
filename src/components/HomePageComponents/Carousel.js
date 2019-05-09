import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import { styles, CarouselButton } from '../../utils';
import { Link } from 'gatsby';

import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const SINGLE_IMAGE = graphql`
	{
		img1: file(relativePath: { eq: "prod/onyfix-vertical.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img2: file(relativePath: { eq: "prod/komplex-vertical.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img3: file(relativePath: { eq: "prod/nagelbearbeitung2.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
		img4: file(relativePath: { eq: "prod/hornhaut2.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1500) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

class ControlledCarousel extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleSelect = this.handleSelect.bind(this);

		this.state = {
			index: 0,
			direction: null
		};
	}

	handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction
		});
	}

	render() {
		const { index, direction } = this.state;

		return (
			<StaticQuery
				query={SINGLE_IMAGE}
				render={(data) => {
					const img1 = data.img1.childImageSharp.fluid;
					const img2 = data.img2.childImageSharp.fluid;
					const img3 = data.img3.childImageSharp.fluid;
					const img4 = data.img4.childImageSharp.fluid;
					return (
						<CarouselWrapper>
							<Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect}>
								<Carousel.Item>
									<Img fluid={img1} className="slide d-block w-100" alt="First slide" />
									<Carousel.Caption>
										<h3 className="text title">Onyfix Nagelkorrektursystem</h3>
										<p className="text info">
											Eine neuartige und schmerzfreie Therapie bei Rollnägeln.
										</p>
										<Link to="/onyfix/" style={{ textDecoration: 'none' }}>
											<CarouselButton style={{ margin: '1rem auto' }}>
												Mehr Infos
											</CarouselButton>{' '}
										</Link>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Img fluid={img2} className="slide d-block w-100" alt="Third slide" />

									<Carousel.Caption>
										<h3 className="text title">Podologische Komplexbehandlung</h3>
										<p className="text info">Das Rundum-sorglos-Paket für Ihre Füße.</p>
										<Link to="/komplexbehandlung/" style={{ textDecoration: 'none' }}>
											<CarouselButton style={{ margin: '1rem auto' }}>
												Mehr Infos
											</CarouselButton>{' '}
										</Link>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Img fluid={img3} className="slide d-block w-100" alt="Third slide" />

									<Carousel.Caption>
										<h3 className="text title">Nagelbehandlung</h3>
										<p className="text info">
											Ideal bei eingewachsenen, verholzten oder von Pilz befallenen Nägeln.
										</p>
										<Link to="/nagelbearbeitung/" style={{ textDecoration: 'none' }}>
											<CarouselButton style={{ margin: '1rem auto' }}>
												Mehr Infos
											</CarouselButton>{' '}
										</Link>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<Img fluid={img4} className="slide d-block w-100" alt="Third slide" />

									<Carousel.Caption>
										<h3 className="text title">Hornhautbehandlung</h3>
										<p className="text info">
											Sagen Sie übermäßiger Hornhaut, Hühneraugen und Schwielen den Kampf an.
										</p>
										<Link to="/hornhaut/" style={{ textDecoration: 'none' }}>
											<CarouselButton style={{ margin: '1rem auto' }}>
												Mehr Infos
											</CarouselButton>{' '}
										</Link>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
						</CarouselWrapper>
					);
				}}
			/>
		);
	}
}

const CarouselWrapper = styled.div`
	.text {
		color: ${styles.colors.mainBlack};
		margin-bottom: 3%;
	}
	.title {
		font-size: 2.5rem;
		@media (max-width: 550px) {
			font-size: 2rem;
		}
	}

	.slide {
		height: 20rem;

		@media (min-width: 768px) {
			height: 25rem;
		}
	}
	.info {
		margin-bottom: 6%;
		font-size: 1.5rem;
		@media (max-width: 550px) {
			font-size: 1rem;
		}
	}
`;

export default ControlledCarousel;
