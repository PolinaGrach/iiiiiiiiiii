import {Title} from "./components/title";
import AboutImg from "../../assets/about-img.svg";
import MainImg from "../../assets/main-img.svg";
import {charactersList} from "../characters-page/mocks/characters-list.js";
import styles from "./main-page.module.css";
import {Link} from "react-router-dom";
import SwiperSlideFirst from "../../assets/swiper-slide-1.svg";
import SwiperSlideSecond from "../../assets/swiper-slide-2.svg";
import SwiperSlideThird from "../../assets/swiper-slide-3.svg";
import SwiperSlideFourth from "../../assets/swiper-slide-4.svg";
import SwiperSlideFifth from "../../assets/swiper-slide-5.svg";
import {SwiperComponent} from "../../shared/swiper/swiper-component.jsx";

export const MainPage = () => {
	return (
		<div>
			<Title title="О нас"/>
			<div className={styles.mainInner}>
				<div className={styles.mainInnerItem}>
					<p className={styles.mainInnerItemText}>Наш сайт про аниме "One Piece" предлагает своим посетителям
						обширную
						информацию о популярном
						японском
						мультсериале. Здесь можно найти последние новости о сериале, информацию о сюжете и персонажах, а
						также приобрести мерч, посвященный любимому аниме.
					</p>
					<p className={styles.mainInnerItemText}>На сайте можно найти подробную информацию о главных
						персонажах аниме,
						их биографии, способностях
						и
						силе.</p>
					<p className={styles.mainInnerItemText}>Фанаты "One Piece" могут найти много полезной информации на
						этом сайте
						и обсудить свои любимые
						моменты с единомышленниками!</p>
				</div>
				<img src={AboutImg} alt="Картинка персонажей"/>
			</div>
			<Title title={'О чем “One Piece”?'}/>
			<div className={styles.mainContentAbout}>
				<p className={styles.mainContentAboutText}>Еще не знаком с сюжетом одного из самых увлекательных аниме
					столетия? Не беда! Переходи в раздел
					“Сюжет” чтобы ознакомиться с кратким содержанием, или освежить в памяти любимые моменты!
					<Link className={styles.mainLink} to={'/story'}>Читать больше</Link>
				</p>
				<img src={MainImg} alt=""/>
			</div>
			<Title title={'Персонажи'}/>
			<div>
				<div className={styles.mainCharactersInner}>
					{charactersList.map((item) => (
						<div key={item.id}>
							<img src={item.avatarImage} alt={item.charactersName}/>
							<p className={styles.mainCharactersName}>{item.charactersName}</p>
						</div>
					)).slice(0, 2)}
				</div>
			</div>
			<Title title="Наш мерч"/>
			<p className={styles.mainMerchText}>Давно хотели приобрести недорогой мерч с полюбившимися персонажами?
				Тогда вы
				пришли по адресу! Предлагаем посмотреть на наши уникальные товары, которые станут отличным подарком как
				для Вас, так и для Ваших близких!</p>
			<Link className={styles.mainLink} to={'/merch'}>Смотреть больше</Link>
			<SwiperComponent>
				<Link to={'/merch-item'} className={styles.mainSlide}>
					<img src={SwiperSlideFirst} alt=""/>
					<p className={styles.mainSlideDescr}>Футболка с Луффи</p>
					<p className={styles.mainSlidePrice}>2000 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.mainSlide}>
					<img src={SwiperSlideSecond} alt=""/>
					<p className={styles.mainSlideDescr}>Футболка с Зоро</p>
					<p className={styles.mainSlidePrice}>2000 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.mainSlide}>
					<img src={SwiperSlideThird} alt=""/>
					<p className={styles.mainSlideDescr}>Брелок с Зоро</p>
					<p className={styles.mainSlidePrice}>800 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.mainSlide}>
					<img src={SwiperSlideFourth} alt=""/>
					<p className={styles.mainSlideDescr}>Брелок с Роджером</p>
					<p className={styles.mainSlidePrice}>800 руб</p>
				</Link>
				<Link to={'/merch-item'} className={styles.mainSlide}>
					<img src={SwiperSlideFifth} alt=""/>
					<p className={styles.mainSlideDescr}>Брелок с Чоппером</p>
					<p className={styles.mainSlidePrice}>750 руб</p>
				</Link>
			</SwiperComponent>
		</div>
	);
};
