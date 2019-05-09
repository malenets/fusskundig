import React, { Component } from 'react';
import { Section, Title } from '../../../utils';
import styled from 'styled-components';
import { styles } from '../../../utils';

export default class Prob2 extends Component {
	render() {
		return (
			<Section>
				<Prob2Wrapper>
					<p>
						Ihr Körper wird von Ihren Füßen getragen und stellt somit das "Fundament" dar. Leider spielen
						Füße bei der Körperpflege oft eine untergeordnete Rolle. Sie werden oft falsch behandelt, gerade
						beim schneiden der Fußnägel oder bei der Pflege nach dem Duschen. So können Infektionen des
						Nagelbettes oder auch eingewachsene Fußnägel entstehen.
					</p>
					<p>
						Nicht ausschließlich aber besonders bei Diabetikern und chronisch kranken Patienten kann es
						häufig zu massiven Fußschäden kommen. Eine regelmäßige aber vorallem fachkundige Fußpflege ist
						hier unbedingt erforderlich. Mobilität durch gesunde Füße bedeutet Wohlbefinden und
						unabhängigkeit. In der Lage zu sein sich uneingeschränkt und schmerzfrei bewegen zu können ist
						ein häufig unterschätztes Grundbedürfnis. Wer nicht mobil sein kann, kann ab vielen Dingen des
						Alltags nicht Teilnehmen und büßt ein stück Lebensqualität ein.
					</p>
					<p>
						Die Medizinische Fußpflege unterscheidet sich nicht nur im Ausbildundsschwerpunkt und
						Hygienevorschriften grundlegend von der herkömmlichen Fußpflege. Podologen haben durch die
						Spezialisierung und den täglichen Umgang mit verschiedensten Krankheitsbildern einfach mehr
						Erfahrung. Darum empfehlen wir gerade bei medizinischen Problemen unbedingt fachkundige Hilfe
						aufzusuchen und sich in qualifizierte Hände zu begeben Wir von Fußkundig heißen Sie jeder Zeit
						Herzlich Willkommen.
					</p>
				</Prob2Wrapper>
			</Section>
		);
	}
}

const Prob2Wrapper = styled.div`
	width: 80%;
	margin: 2rem auto;
	text-align: center;
	color: ${styles.colors.mainGrey};
`;
