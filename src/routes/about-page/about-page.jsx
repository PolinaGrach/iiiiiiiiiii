import {Title} from "../main-page/components/title.jsx";
import AboutImg from '../../assets/about-img.svg';
import styles from './about-page.module.css'

export const AboutPage = () => {
	return (
		<>
			<Title title={'О нас'}/>
			<div className={styles.aboutInner}>
				<div className={styles.aboutItem}>
					<p className={styles.aboutText}>Наш сайт про аниме "One Piece" предлагает своим посетителям обширную информацию о популярном
						японском
						мультсериале. Здесь можно найти последние новости о сериале, информацию о сюжете и персонажах, а
						также приобрести мерч, посвященный любимому аниме.
					</p>
					<p className={styles.aboutText}>На сайте можно найти подробную информацию о главных персонажах аниме, их биографии, способностях
						и
						силе.</p>
					<p className={styles.aboutText}>Фанаты "One Piece" могут найти много полезной информации на этом сайте и обсудить свои любимые
						моменты с единомышленниками!</p>
				</div>
				<img src={AboutImg} alt="Картинка персонажей"/>
			</div>
		</>
	);
};

