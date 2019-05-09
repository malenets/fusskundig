import React, { Component } from 'react';
import { Section} from '../../../utils';
import styled from 'styled-components';
import { styles } from '../../../utils';

export default class Diabetes extends Component {
	render() {
		return (
			<Section>
				<DiaWrapper>
					<div className="section">
						<p className="p1">
							Das Diabethische Fußsyndrom bezeichnet Spätfolgen am Fuß, welche in Form von
							Nervenschädigungen (Polyneuropathie), Durchblutungsstörungen (Mikroangiopathie) und
							Infektionen auftreten können.
						</p>
						<p>
							Nervenschädigungen beeinträchtigen häufig das Schmerz- sowie das Temperaturempfinden und die
							Neuropathie beeinträchtigt die Schweißsekretion am Fuß, was sich durch trockene und rissige
							Haut bemerkbar macht. Ebenso kann es zu verformungen des Fußes kommen und Schwielen und
							Druckstellen verursachen. Durchblutungsstörungen lassen Wunden langsamer heilen und und
							könnte im schlimmsten Fall sogar zum Absterben von Gewebe führen. Infektionen im Rahmen der
							Diabetis erkranung kann sowohl in Hautschichten als auch in Knochen und Gelenken für
							Beschwerden sorgen.
						</p>
					</div>

					<div className="section boxed">
						<h3>Was Sie selber tun können</h3>
						<ul className="info">
							<li>Regelmäßiges Inspizieren der Zehzwischenräume und Fußsohle</li>
							<li>Tägliches Waschen und gründliches Trocknen der Füße und Zehzwischenräume</li>
							<li>Richtiges und Vorallem richtig sitzendes Schuhwerk.</li>
							<li>Bei Trockenen Füßen und Beinen empfehlen wir diese regelmäßig einzucremen</li>
							<li>Regelmäßig einen Podologen aufsuchen</li>
						</ul>
					</div>

					<div className="section">
						<h3>Sind Ihre Füße gefährdet?</h3>
						<p className="p1">
							Sollten Sie unsicher sein, ob Sie am Diabethischen Fußsyndrom leiden bzw. ob eventuelle
							Nerven- oder Durchblutungsstörungen haben sollten, kommen Sie gerne zu uns in die Praxis.
						</p>
						<p>
							Wir testen bei jeder Behandlung Ihr Vibrations-, Temperatur- und Sensibilitätempfinden mit
							verschiedenen medizinischen Instrumenten und untersuchen Ihre Füße selbstverständlich auf
							mögliche Schädigungen durch Infektionen.
						</p>
					</div>
				</DiaWrapper>
			</Section>
		);
	}
}

const DiaWrapper = styled.div`
	width: 80%;
	margin: 2rem auto;
	text-align: center;
	color: ${styles.colors.mainGrey};
	.section {
		margin: 3rem auto;
	}
	li {
		/*list-style-position: inside;*/
		width: 77%;
		margin: auto;
	}
	h3 {
		margin-bottom: 1.5rem;
	}
	.boxed {
		${styles.border({ color: `${styles.colors.mainGrey}` })};
		text-align: left;
		margin: 1.5rem auto;
		padding: 1rem;
		h3 {
			text-align: center;
			margin-top: 1rem;
		}
		@media (min-width: 900px) {
			width: 70%;
		}
	}
`;
