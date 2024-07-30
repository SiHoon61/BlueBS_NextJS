import React, { useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./businessSliderStyles.module.css";

//img
import business1 from '../../public/assets/Home/business1.png';
import business2 from '../../public/assets/Home/business2.png';
import business3 from '../../public/assets/Home/business3.png';
import business4 from '../../public/assets/Home/business4.png';
import business5 from '../../public/assets/Home/business5.png';
import business6 from '../../public/assets/Home/business6.png';
import business7 from '../../public/assets/Home/business7.png';

import {
    SliderContainer,
    NextTo,
    Prev,
    ImageBox,
    BusinessImage,
    BusinessTextBox,
    BusinessTitleText,
} from './style';

function BusinessCarousel() {
    const [isSliding, setIsSliding] = useState(false);
    const router = useRouter();

    const goPurify = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/purify");
        }
    };
    const goSewer = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/sewer");
        }
    };
    const goAgriculture = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/agriculture");
        }
    };
    const goAnimalHusbandry = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/animalHusbandry");
        }
    };
    const goGreenAlgae = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/greenAlgae");
        }
    };
    const goLeachate = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/leachate");
        }
    };
    const goMonitoring = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/monitoring");
        }
    };

    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );

    const settings = {
        dots: true,
        className: "center1",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 1,
        nextArrow: (
            <SlickButtonFix>
                <NextTo />
            </SlickButtonFix>
        ),
        prevArrow: (
            <SlickButtonFix>
                <Prev />
            </SlickButtonFix>
        ),
        beforeChange: () => setIsSliding(true), // 슬라이드 시작 시 isSliding을 true로 설정
        afterChange: () => setIsSliding(false), // 슬라이드 종료 시 isSliding을 false로 설정
    };

    return (
        <SliderContainer className="slider-container1">
            <Slider {...settings}>
                <ImageBox>
                    <BusinessImage $src={business1.src} onClick={goPurify}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                정수 분야
                            </BusinessTitleText>
                            BlusBS의 혁신적인 정수 기술을 통해 우리가 마시는 물을 안전하게 공급합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business2.src} onClick={goSewer}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                하·폐수 분야
                            </BusinessTitleText>
                            하수 및 폐수를 초고도로 재이용하여 친환경 수자원으로 다시 활용됩니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business3.src} onClick={goAgriculture}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                농업 분야
                            </BusinessTitleText>
                            농업을 숨쉬게 하는 물, BlueBS가 함께합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business4.src} onClick={goAnimalHusbandry}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                축산 & 폐수 분야
                            </BusinessTitleText>
                            전기 촉매 전극 시스템을 활용하여 고농도 오염물을 효과적으로 처리합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business5.src} onClick={goGreenAlgae}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                녹조 분야
                            </BusinessTitleText>
                            오염물질의 저감을 위한 최적화된 기술을 보유하고 있습니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business6.src} onClick={goLeachate}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                침출수 분야
                            </BusinessTitleText>
                            전기 촉매를 활용하여 산화, 흡착, 응집을 통해 폐수를 처리합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
                <ImageBox>
                    <BusinessImage $src={business7.src} onClick={goMonitoring}>
                        <BusinessTextBox>
                            <BusinessTitleText>
                                운영관리 분야
                            </BusinessTitleText>
                            설계, 제작, 시공, 및 시운전에 이르기까지 모든 솔루션을 제공합니다
                        </BusinessTextBox>
                    </BusinessImage>
                </ImageBox>
            </Slider>
        </SliderContainer>
    );
}

export default BusinessCarousel;
