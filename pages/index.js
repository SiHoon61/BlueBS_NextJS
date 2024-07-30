import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";

//assets
const mainVideo = '/assets/videos/main.mp4';

//style
import {
    Video,
    VideoContainer,
    ScrollDown,
    DownImg,
    TechContainer,
    TechText,
    TechSubIndexContainer,
    Tech1,
    Tech2,
    Tech3,
    Tech4,
    TechTextContainer,
    TechTextBox,
    TectTextArrow,
    BusinessContainer,
    BusinessTextBox,
    BusinessText,
    ProductsContainer,
    ProductsText,
    NewsContainer,
    NewsText,
    NewsBox,
} from './style';

//news
import News from '../components/News/News';

//carousel
import BusinessCarousel from '../components/businessCarousel/BusinessCarousel'
import ProductsCarousel from '../components/ProductsCarousel/ProductsCarousel';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

const Home = () => {
    const router = useRouter();
    const goElectroCatalyst = () => {
        router.push("/electroCatalyst");
    };
    const goTower = () => {
        router.push("/tower");
    };
    const goFilter = () => {
        router.push("/filter");
    };
    const goNanoBubble = () => {
        router.push("/nanoBubble");
    };
    const size = useWindowSize();
    return (
        <>
            <VideoContainer $height={size.height}>
                <Video muted autoPlay loop playsInline>
                    <source src={mainVideo} type="video/mp4" />
                </Video>
                <ScrollDown>
                    Scroll Down
                    <DownImg />
                </ScrollDown>
            </VideoContainer>

            <TechContainer>
                <TechText>Technology</TechText>
                <TechSubIndexContainer $width={size.width}>
                    <Tech1 $width={size.width / 4} onClick={goElectroCatalyst}>
                        <TechTextContainer>
                            신개념 초격차
                            <TechTextBox>
                                전기촉매필터
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </Tech1>
                    <Tech2 $width={size.width / 4} onClick={goTower}>
                        <TechTextContainer>
                            초고속
                            <TechTextBox>
                                전기촉매타워
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </Tech2>
                    <Tech3 $width={size.width / 4} onClick={goFilter}>
                        <TechTextContainer>
                            무약품 세정
                            <TechTextBox>
                                마이크로<br />여과필터
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </Tech3>
                    <Tech4 $width={size.width / 4} onClick={goNanoBubble}>
                        <TechTextContainer>
                            막힘 없는
                            <TechTextBox>
                                울트라<br />나노버블
                                <TectTextArrow />
                            </TechTextBox>
                        </TechTextContainer>
                    </Tech4>
                </TechSubIndexContainer>
            </TechContainer>

            <BusinessContainer>
                <BusinessTextBox>
                    <BusinessText>Business</BusinessText>
                </BusinessTextBox>
                <BusinessCarousel />
            </BusinessContainer>

            <ProductsContainer>
                <ProductsText>Products</ProductsText>
                <ProductsCarousel />
            </ProductsContainer>

            <NewsContainer>
                <NewsText>News</NewsText>
                <NewsBox>
                    <News />
                </NewsBox>
            </NewsContainer>
        </>
    );
};

export default Home;
