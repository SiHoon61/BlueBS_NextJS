import React, { useState } from "react";
import { useRouter } from 'next/router';
import Slider from "react-slick";
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './productsSliderStyles.module.css';

const ProductsCarousel = () => {
    const [isSliding, setIsSliding] = useState(false);
    const router = useRouter();

    const navigateTo = (path) => (e) => {
        if (isSliding) {
            e.stopPropagation();
        } else {
            router.push(path);
        }
    };

    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );

    const settings = {
        className: styles.center2,
        infinite: false,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        nextArrow: (
            <SlickButtonFix>
                <div className="bg-cover h-15 w-15" style={{ backgroundImage: `url(/assets/Home/emptyArrow.svg)` }} />
            </SlickButtonFix>
        ),
        prevArrow: (
            <SlickButtonFix>
                <div className="transform rotate-180 bg-cover h-15 w-15" style={{ backgroundImage: `url(/assets/Home/emptyArrow.svg)` }} />
            </SlickButtonFix>
        ),
        beforeChange: () => setIsSliding(true),
        afterChange: () => setIsSliding(false),
    };

    return (
        <div className="mt-24 ml-10 sm:mt-0">
            <Slider {...settings}>
                <div>
                    <div className="text-white w-125 mt-12 mb-5 cursor-pointer" onClick={navigateTo("/drinkingPD")}>
                        <div className="text-2xl font-bold mb-1">음용수·생활용수·담수화</div>
                        전기촉매 기술을 활용해 맛냄새 유발물질인 2-MIB를 제거하는 시스템을 제공합니다.
                    </div>
                    <Image className="w-125 cursor-pointer" src="/assets/Home/products1.png" alt="products1" onClick={navigateTo("/drinkingPD")} width={500} height={330} />
                </div>

                <div>
                    <Image className="w-125 cursor-pointer" src="/assets/Home/products2.png" alt="products2" onClick={navigateTo("/sewerPD")} width={500} height={330} />
                    <div className="text-white w-125 mt-5 mb-12 cursor-pointer" onClick={navigateTo("/sewerPD")}>
                        <div className="text-2xl font-bold mb-1">하/폐수 재이용</div>
                        전기촉매 기술을 활용해 하수 및 폐수를 초고도로 재이용하여 친환경 수자원으로 다시 활용합니다.
                    </div>
                </div>

                <div>
                    <div className="text-white w-125 mt-12 mb-5 cursor-pointer" onClick={navigateTo("/agriculturePD")}>
                        <div className="text-2xl font-bold mb-1">FDA/MSF 농업</div>
                        전기촉매(EF)와 마이크로필터여과(MSF) 기술을 혼용한 무약품 친환경 농업용수를 안전하게 공급합니다.
                    </div>
                    <Image className="w-125 cursor-pointer" src="/assets/Home/products3.png" alt="products3" onClick={navigateTo("/agriculturePD")} width={500} height={330} />
                </div>

                <div>
                    <Image className="w-125 cursor-pointer" src="/assets/Home/products4.png" alt="products4" onClick={navigateTo("/animalHusbandryPD")} width={500} height={330} />
                    <div className="text-white w-125 mt-5 mb-12 cursor-pointer" onClick={navigateTo("/animalHusbandryPD")}>
                        <div className="text-2xl font-bold mb-1">축산분뇨 처리</div>
                        고농도 축산분뇨를 초고도 처리하여 물을 재이용할 수 있게 하는 전기화학적 기술을 제공합니다.
                    </div>
                </div>

                <div>
                    <div className="text-white w-125 mt-12 mb-5 cursor-pointer" onClick={navigateTo("/greenAlgaePD")}>
                        <div className="text-2xl font-bold mb-1">녹조/저수지 복원 및 유지</div>
                        녹조, 부유물질, T-N, T-P, BOD, COD 등의 오염물질 저감을 위해 최적화된 기술을 제공합니다
                    </div>
                    <Image className="w-125 cursor-pointer" src="/assets/Home/products5.png" alt="products5" onClick={navigateTo("/greenAlgaePD")} width={500} height={330} />
                </div>

                <div>
                    <Image className="w-125 cursor-pointer" src="/assets/Home/products6.png" alt="products6" onClick={navigateTo("/leachatePD")} width={500} height={330} />
                    <div className="text-white w-125 mt-5 mb-12 cursor-pointer" onClick={navigateTo("/leachatePD")}>
                        <div className="text-2xl font-bold mb-1">침출수 처리</div>
                        전기 촉매(OH 라디칼)를 이용하여 산화, 흡착, 응집의 과정을 통해 침출수를 처리하는 기술을 제공합니다.
                    </div>
                </div>

                <div>
                    <div className="text-white w-125 mt-12 mb-5 cursor-pointer" onClick={navigateTo("/aIWaterSystemPD")}>
                        <div className="text-2xl font-bold mb-1">AI 스마트 물 관리 시스템</div>
                        IoT, AMI 및 데이터 기반 솔루션과 같은 첨단 기술을 통합하여 처리, 생산 및 공급 상황 전반에 걸쳐 실시간 모니터링 및 최적화를 제공합니다.
                    </div>
                    <Image className="w-125 cursor-pointer" src="/assets/Home/products7.png" alt="products7" onClick={navigateTo("/aIWaterSystemPD")} width={500} height={330} />
                </div>

                <div className="w-125 h-82" />
                <div className="w-125 h-82" />
                <div className="w-125 h-82" />
            </Slider>
        </div>
    );
}

export default ProductsCarousel;
