import React, { Component } from 'react';
import styled from 'styled-components';
import { styles, Section, SectionButton, Grid } from '../../utils';
import { Link } from 'gatsby';

export default class Problems extends Component {
	render() {
		return (
			<GridWrapper>
				<Section>
					<Grid>
						<div className="item item-1">
							<h3 className="diabetes">
								Für <br /> Diabetiker
							</h3>
							<div className="rm">
								<Link to="/diabetiker/" style={{ textDecoration: 'none' }}>
									<SectionButton style={{ margin: '1rem auto' }}>Mehr Infos</SectionButton>{' '}
								</Link>
							</div>
						</div>
						<div className="item item-2">
							<h3>
								Warum Füße <br />
								wichtig sind
							</h3>
							<div className="rm">
								<Link to="/warumWichtig/" style={{ textDecoration: 'none' }}>
									<SectionButton style={{ margin: '1rem auto' }}>Mehr Infos</SectionButton>{' '}
								</Link>
							</div>
						</div>
						<div className="item item-3">
							<h3>
								Was ist <br /> Podologie?
							</h3>
							<div className="rm">
								<Link to="/podologie/" style={{ textDecoration: 'none' }}>
									<SectionButton style={{ margin: '1rem auto' }}>Mehr Infos</SectionButton>{' '}
								</Link>
							</div>
						</div>
					</Grid>
				</Section>
			</GridWrapper>
		);
	}
}

const GridWrapper = styled.div`
	.item {
		color: ${styles.colors.mainWhite};
	}
	background: ${styles.colors.mainGrey};
	h3 {
		font-size: 2rem;
		font-weight: 400;
	}
	text-align: center;
`;
