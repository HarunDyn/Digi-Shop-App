import { Swiper, SwiperSlide } from 'swiper/react';
import Logo1 from '../../assets/bg-1.png'
import Logo2 from '../../assets/bg-2.png'
import Logo3 from '../../assets/bg-3.png'


import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import Product from '../Products/Products';

const CardInfos = [
    {
        id: 1,
        title: 'Organic Skinny High WaistRaw Hem Jeans',
        price: 33.95
    },
    {
        id: 2,
        title: 'Organic Skinny High WaistRaw Hem Jeans',
        price: 33.95
    },
    {
        id: 3,
        title: 'Organic Skinny High WaistRaw Hem Jeans',
        price: 33.95
    }
]


const Slider = () => {
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 763) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <>
            <Swiper
                slidesPerView={3}
                width={isMobile ? 500 : 850}
                spaceBetween={isMobile ? 5 : 30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
                modules={[Pagination, Navigation]}
            >
                {
                    CardInfos.map((card) => {
                        return (
                            <SwiperSlide key={card.id}>
                                <div className="card">
                                    <div className="card-img">
                                        {card.id === 1 ? <SwiperSlide><img src={Logo1} alt="Logo1" /></SwiperSlide>
                                            : card.id === 2 ? <SwiperSlide><img src={Logo2} alt="Logo2" /></SwiperSlide>
                                                : <SwiperSlide><img src={Logo3} alt="Logo3" /></SwiperSlide>
                                        }
                                    </div>
                                    <Product card={card} />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </>
    );
}

export default Slider;