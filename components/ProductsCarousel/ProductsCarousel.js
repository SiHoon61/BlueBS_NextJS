import React, { useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//img
import products1 from '../../public/assets/Home/products1.png';
import products2 from '../../public/assets/Home/products2.png';
import products3 from '../../public/assets/Home/products3.png';
import products4 from '../../public/assets/Home/products4.png';
import products5 from '../../public/assets/Home/products5.png';
import products6 from '../../public/assets/Home/products6.png';
import products7 from '../../public/assets/Home/products7.png';

//style
import {
    SliderContainer,
    ProductsBox,
    ProductsImg,
    ProductsOddText,
    ProductsEvenText,
    ProductsTitleText,
    ProductsEmptyBox,
    NextTo,
    Prev,
} from './style';

function SwipeToSlide() {
    const [isSliding, setIsSliding] = useState(false);
    const router = useRouter();
    const goDrinkingPD = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/drinkingPD");
        }
    }
    const goSewerPD = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/sewerPD");
        }
    }
    const goAgriculturePD = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/agriculturePD");
        }
    }
    const goAnimalHusbandryPD = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/animalHusbandryPD");
        }
    }
    const goGreenAlgaePD = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/greenAlgae");
        }
    }
    const goLeachatePD = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/leachatePD");
        }
    }
    const goAIWaterSystemPD = (e) => {
        if (isSliding) {
            e.stopPropagation(); // 슬라이드 중 클릭 이벤트를 무시
        } else {
            router.push("/aIWaterSystemPD");
        }
    }
    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );
    const settings = {
        className: "center2",
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
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
        <SliderContainer className="slider-container2">
            <Slider {...settings}>
                <ProductsBox>
                    <ProductsOddText onClick={goDrinkingPD}>
                        <ProductsTitleText>
                            음용수·생활용수·담수화
                        </ProductsTitleText>
                        전기촉매 기술을 활용해 맛냄새 유발물질인 2-MIB를 제거하는 시스템을 제공합니다.
                    </ProductsOddText>
                    <ProductsImg src={products1.src} alt="products1" onClick={goDrinkingPD}>
                    </ProductsImg>
                </ProductsBox>

                <ProductsBox>
                    <ProductsImg src={products2.src} alt="products2" onClick={goSewerPD}>
                    </ProductsImg>
                    <ProductsEvenText onClick={goSewerPD}>
                        <ProductsTitleText>
                            하/폐수 재이용
                        </ProductsTitleText>
                        전기촉매 기술을 활용해 하수 및 폐수를 초고도로 재이용하여 친환경 수자원으로 다시 활용합니다.
                    </ProductsEvenText>
                </ProductsBox>

                <ProductsBox>
                    <ProductsOddText onClick={goAgriculturePD}>
                        <ProductsTitleText>
                            FDA/MSF 농업
                        </ProductsTitleText>
                        전기촉매(EF)와 마이크로필터여과(MSF) 기술을 혼용한 무약품 친환경 농업용수를안전하게 공급합니다.
                    </ProductsOddText>
                    <ProductsImg src={products3.src} alt="products3" onClick={goAgriculturePD}>
                    </ProductsImg>
                </ProductsBox>

                <ProductsBox>
                    <ProductsImg src={products4.src} alt="products4" onClick={goAnimalHusbandryPD}>
                    </ProductsImg>
                    <ProductsEvenText onClick={goAnimalHusbandryPD}>
                        <ProductsTitleText>
                            축산분뇨 처리
                        </ProductsTitleText>
                        고농도 축산분뇨를 초고도 처리하여 물을 재이용할 수 있게 하는 전기화학적 기술을 제공합니다.
                    </ProductsEvenText>
                </ProductsBox>

                <ProductsBox>
                    <ProductsOddText onClick={goGreenAlgaePD}>
                        <ProductsTitleText>
                            녹조/저수지 복원 및 유지
                        </ProductsTitleText>
                        녹조, 부유물질, T-N, T-P, BOD, COD 등의 오염물질 저감을 위해 최적화된 기술을 제공합니다
                    </ProductsOddText>
                    <ProductsImg src={products5.src} alt="products5" onClick={goGreenAlgaePD}>
                    </ProductsImg>
                </ProductsBox>

                <ProductsBox>
                    <ProductsImg src={products6.src} alt="products6" onClick={goLeachatePD}>
                    </ProductsImg>
                    <ProductsEvenText onClick={goLeachatePD}>
                        <ProductsTitleText>
                            침출수 처리
                        </ProductsTitleText>
                        전기 촉매(OH 라디칼)를 이용하여 산화, 흡착, 응집의 과정을 통해 침출수를 처리하는 기술을 제공합니다.
                    </ProductsEvenText>
                </ProductsBox>

                <ProductsBox>
                    <ProductsOddText onClick={goAIWaterSystemPD}>
                        <ProductsTitleText>
                            AI 스마트 물 관리 시스템
                        </ProductsTitleText>
                        IoT, AMI 및 데이터 기반 솔루션과 같은 첨단 기술을 통합하여 처리, 생산 및 공급 상황 전반에 걸쳐 실시간 모니터링 및 최적화를 제공합니다.
                    </ProductsOddText>
                    <ProductsImg src={products7.src} alt="products7" onClick={goAIWaterSystemPD}>
                    </ProductsImg>
                </ProductsBox>
                <ProductsEmptyBox />
                <ProductsEmptyBox />
                <ProductsEmptyBox />
            </Slider>
        </SliderContainer>
    );
}

export default SwipeToSlide;
