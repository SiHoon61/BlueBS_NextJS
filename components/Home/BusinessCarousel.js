import React, { useState } from "react";
import { useRouter } from 'next/router';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './businessSliderStyles.module.css';

const BusinessCarousel = () => {
    const [isSliding, setIsSliding] = useState(false);
    const router = useRouter();

    const handleClick = (navigateTo) => (e) => {
        if (isSliding) {
            e.stopPropagation();
        } else {
            router.push(navigateTo);
        }
    };

    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );

    const settings = {
        dots: true,
        className: styles.center1,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 1,
        nextArrow: (
            <SlickButtonFix>
                <div className="bg-no-repeat bg-contain opacity-70 h-12 w-12 md:h-8 md:w-8 bg-[url('/assets/Home/rightArrow.svg')] rotate-180" />
            </SlickButtonFix>
        ),
        prevArrow: (
            <SlickButtonFix>
                <div className="bg-no-repeat bg-contain opacity-70 h-12 w-12 md:h-8 md:w-8 bg-[url('/assets/Home/rightArrow.svg')]" />
            </SlickButtonFix>
        ),
        beforeChange: () => setIsSliding(true),
        afterChange: () => setIsSliding(false),
    };

    const businessImages = [
        { src: "/assets/Home/business1.png", text: "정수 분야", description: "BlusBS의 혁신적인 정수 기술을 통해 우리가 마시는 물을 안전하게 공급합니다", navigateTo: "/purify" },
        { src: "/assets/Home/business2.png", text: "하·폐수 분야", description: "하수 및 폐수를 초고도로 재이용하여 친환경 수자원으로 다시 활용됩니다", navigateTo: "/sewer" },
        { src: "/assets/Home/business3.png", text: "농업 분야", description: "농업을 숨쉬게 하는 물, BlueBS가 함께합니다", navigateTo: "/agriculture" },
        { src: "/assets/Home/business4.png", text: "축산 & 폐수 분야", description: "전기 촉매 전극 시스템을 활용하여 고농도 오염물을 효과적으로 처리합니다", navigateTo: "/animalHusbandry" },
        { src: "/assets/Home/business5.png", text: "녹조 분야", description: "오염물질의 저감을 위한 최적화된 기술을 보유하고 있습니다", navigateTo: "/greenAlgae" },
        { src: "/assets/Home/business6.png", text: "침출수 분야", description: "전기 촉매를 활용하여 산화, 흡착, 응집을 통해 폐수를 처리합니다", navigateTo: "/leachate" },
        { src: "/assets/Home/business7.png", text: "운영관리 분야", description: "설계, 제작, 시공, 및 시운전에 이르기까지 모든 솔루션을 제공합니다", navigateTo: "/monitoring" },
    ];

    return (
        <div className={styles.sliderContainer1}>
            <Slider {...settings}>
                {businessImages.map((image, index) => (
                    <div key={index} className="relative bg-cover bg-center cursor-pointer transition-all duration-300" style={{ width: '800px', height: '534px' }} onClick={handleClick(image.navigateTo)}>
                        <Image src={image.src} alt={image.text} layout="fill" objectFit="cover" />
                        <div className="absolute bottom-1/4 left-1/4 text-white text-xl font-bold">
                            <div className="text-4xl font-bold mb-2">{image.text}</div>
                            {image.description}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default BusinessCarousel;
