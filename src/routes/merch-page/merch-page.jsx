import {Title} from "../main-page/components/title.jsx";
import {Link} from "react-router-dom";
import {SwiperComponent} from "../../shared/swiper/swiper-component.jsx";
import SwiperSlideFirst from '../../assets/swiper-slide-1.svg'
import SwiperSlideSecond from '../../assets/swiper-slide-2.svg'
import SwiperSlideThird from '../../assets/swiper-slide-3.svg'
import SwiperSlideFourth from '../../assets/swiper-slide-4.svg'
import SwiperSlideFifth from '../../assets/swiper-slide-5.svg'
import SwiperSlideSixth from '../../assets/swiper-slide-6.svg'
import SwiperSlideSeventh from '../../assets/swiper-slide-7.svg'
import SwiperSlideEighth from '../../assets/swiper-slide-8.svg'
import SwiperSlideNinth from '../../assets/swiper-slide-9.svg'
import SwiperSlideTenth from '../../assets/swiper-slide-10.svg'
import styles from './merch-page.module.css'

export const MerchPage = () => {
	return (
		<div >
			<Title title="Наш мерч"/>
			<div className={styles.merchTextContent}>
				<p className={styles.merchText}>Давно хотели приобрести недорогой мерч с полюбившимися персонажами?
					Тогда вы
					пришли по адресу! Предлагаем посмотреть на наши уникальные товары, которые станут отличным подарком
					как
					для Вас, так и для Ваших близких!</p>
			</div>
			<SwiperComponent>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideFirst} alt=""/>
					<p className={styles.merchSlideDescr}>Футболка с Луффи</p>
					<p className={styles.merchSlidePrice}>2000 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideSecond} alt=""/>
					<p className={styles.merchSlideDescr}>Футболка с Зоро</p>
					<p className={styles.merchSlidePrice}>2000 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideThird} alt=""/>
					<p className={styles.merchSlideDescr}>Брелок с Зоро</p>
					<p className={styles.merchSlidePrice}>800 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideFourth} alt=""/>
					<p className={styles.merchSlideDescr}>Брелок с Роджером</p>
					<p className={styles.merchSlidePrice}>800 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideFifth} alt=""/>
					<p className={styles.merchSlideDescr}>Брелок с Чоппером</p>
					<p className={styles.merchSlidePrice}>750 руб</p>
				</Link>
			</SwiperComponent>
			<Title title={'Смотрите также'}/>
			<SwiperComponent>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideSixth} alt=""/>
					<p className={styles.merchSlideDescr}>Брелок с Пиратами</p>
					<p className={styles.merchSlidePrice}>750 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideSeventh} alt=""/>
					<p className={styles.merchSlideDescr}>Скетчбук с Луффи</p>
					<p className={styles.merchSlidePrice}>900 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideEighth} alt=""/>
					<p className={styles.merchSlideDescr}>Значок с Ван-Писом</p>
					<p className={styles.merchSlidePrice}>300 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideNinth} alt=""/>
					<p className={styles.merchSlideDescr}>Рюкзак Эйса</p>
					<p className={styles.merchSlidePrice}>2750 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.merchSlide}>
					<img src={SwiperSlideTenth} alt=""/>
					<p className={styles.merchSlideDescr}>Трусы Мугивары</p>
					<p className={styles.merchSlidePrice}>750 руб</p>
				</Link>
			</SwiperComponent>
			<div className={styles.merchTextContent}>
				<p className={styles.merchText}>Остались вопросы о доставке или качестве товаров?</p>
				<p className={styles.merchText}>Напишите на нашу почту: onepiecefan@gmail.com</p>
				<p className={styles.merchText}>Либо обратитесь по номеру: +7(952)812</p>
				<p className={styles.merchText}>Для того чтобы приобрести товары, пройдите регистрацию:</p>
			</div>
			<Link className={styles.merchLink} to={'/registration'}>Зарегистрироваться</Link>
		</div>
	);
};

