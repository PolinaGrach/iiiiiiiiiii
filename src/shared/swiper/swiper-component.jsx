import {Children} from "react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import "./swiper-component.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export const SwiperComponent = ({children, slidesPerView = 3, spaceBetween = 50,}) => {
	const slides = Children.toArray(children);

	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={spaceBetween}
				slidesPerView={slidesPerView}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					769: {
						slidesPerView: 2,
					},
					993: {
						slidesPerView: slidesPerView,
					}
				}}
				navigation={true}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
			>
				{slides.map((slide, index) => (
					<SwiperSlide className="swiper-slide" key={index}>
						{slide}
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
