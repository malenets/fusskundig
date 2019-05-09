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
							<h1 className="diabetes">
								Für <br /> Diabetiker
							</h1>
							<div className="rm">
								<Link to="/diabetiker/" style={{ textDecoration: 'none' }}>
									<SectionButton style={{ margin: '1rem auto' }}>Mehr Infos</SectionButton>{' '}
								</Link>
							</div>
						</div>
						<div className="item item-2">
							<h1>
								Warum Füße <br />
								wichtig sind
							</h1>
							<div className="rm">
								<Link to="/prob2/" style={{ textDecoration: 'none' }}>
									<SectionButton style={{ margin: '1rem auto' }}>Mehr Infos</SectionButton>{' '}
								</Link>
							</div>
						</div>
						<div className="item item-3">
							<h1>
								Was ist <br /> Podologie?
							</h1>
							<div className="rm">
								<Link to="/prob3/" style={{ textDecoration: 'none' }}>
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
	h1 {
		font-size: 2rem;
		font-weight: lighter;
	}
	text-align: center;
`;
