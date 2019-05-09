import styled from 'styled-components';
import { styles } from '../utils';

const BannerButton = styled.button`
	display: block;
	color: ${styles.colors.mainWhite};
	background: transparent;
	padding: 0.5rem 1rem;
	font-size: 1rem;
	letter-spacing: 0.15rem;
	font-weight: 700;
	${styles.border({ color: `${styles.colors.mainWhite}` })};
	margin-bottom: 1rem;
	${styles.transition({})};
	&:hover {
		background: ${styles.colors.mainWhite};
		color: ${styles.colors.mainGrey};
		cursor: pointer;
	}
`;

const SectionButton = styled(BannerButton)`
    color: ${styles.colors.mainGrey2};
    ${styles.border({ color: `${styles.colors.mainGrey2}` })};
    &:hover{
        background: ${styles.colors.mainGrey2};
        color: ${styles.colors.mainBlack};
    }
`;

const CarouselButton = styled(BannerButton)`
    color: ${styles.colors.mainGrey};
    ${styles.border({ color: `${styles.colors.mainGrey}` })};
    &:hover{
        background: ${styles.colors.mainGrey};
        color: ${styles.colors.mainWhite};
    }
`;

export { BannerButton, SectionButton, CarouselButton };
