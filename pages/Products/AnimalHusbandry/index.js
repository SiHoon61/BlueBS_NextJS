import React from 'react';

//img
const processImg1 = '/assets/Products/AnimalHusbandry/process1.png';
const processImg2 = '/assets/Products/AnimalHusbandry/process2.png';
const processImg3 = '/assets/Products/AnimalHusbandry/process3.png';
const applyImg1 = '/assets/Products/AnimalHusbandry/apply1.png';
const applyImg2 = '/assets/Products/AnimalHusbandry/apply2.png';
const applyImg3 = '/assets/Products/AnimalHusbandry/apply3.png';
const applyImg4 = '/assets/Products/AnimalHusbandry/apply4.png';
const applyImg5 = '/assets/Products/AnimalHusbandry/apply5.png';


//style
import {
    TitleBar,
} from '../../../styles/Products/AnimalHusbandry/style'

import {
    SubColumnContainer,
    SubLargeTitle,
    SubTitle,
    FullSubContent,
} from '../../../components/Body/bodyStyle';

import {
    TitleTextBox,
    TitleMainText,
    MainContainer,
    ProcessBox,
    EmptyBox,
    ProcessImgs,
    ProcessArrow,
    ImgDescription,
    GreyDescription,
    EmptyDescription,
} from '../../../components/Body/productsStyle';


//carousel
import Carousel from '../../../components/ApplyCarousel/ApplyCarousel';

const AnimalHusbandry = () => {
    const imgJson = [
        {
            src: applyImg1,
            alt: 'applyImg'
        },
        {
            src: applyImg2,
            alt: 'applyImg'
        },
        {
            src: applyImg3,
            alt: 'applyImg'
        },
        {
            src: applyImg4,
            alt: 'applyImg'
        },
        {
            src: applyImg5,
            alt: 'applyImg'
        }
    ];
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Products · 축산분뇨/악취 저감
                    <TitleMainText>
                        축산분뇨/악취 저감
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        축산분뇨 처리 프로세스
                    </SubLargeTitle>
                    <FullSubContent>
                        BlueBS의 맞춤형 촉매 전극은 축산분뇨 처리에 있어 효과적이며, 유지보수 및 에너지 절감을 지원하는 동시에 환경오염 감소에 기여하는 친환경적인 솔루션을 제공합니다.
                    </FullSubContent>
                    <ProcessBox>
                        <EmptyBox/>
                        <ImgDescription>
                            <ProcessImgs src={processImg1} alt="processImg" />
                            축산분뇨로 인한 악취와 병균 발생
                            <EmptyDescription />
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <ProcessImgs src={processImg2} alt="processImg" />
                            전기촉매 산화 + 고액분리 + 여과
                            <GreyDescription>
                                (유기물질, 색도, 바이러스, 악취 저감)
                            </GreyDescription>
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <ProcessImgs src={processImg3} alt="processImg" />
                            농업용수, 조경용수 등으로 재활용
                            <GreyDescription>
                                (주변 악취 저감)
                            </GreyDescription>
                        </ImgDescription>
                    </ProcessBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        축산분뇨 처리 공정 개선
                    </SubTitle>
                    <FullSubContent>
                        기존의 축산분뇨 처리 기술은 속도가 느리고, 이에 따른 토목 구조물과 부대 설비의 추가 비용, 처리 과정에서 필터의 손실, 과다한 에너지 소비, 운영 및 유지보수의 어려움 등 여러 문제를 안고 있습니다.
                        BlueBS는 이러한 문제를 해결하기 위해 전기 촉매 전극 시스템을 활용한 혁신적인 기술을 개발하였습니다.<br />
                        이 기술은 고농도의 오염물질 처리는 물론, 초고도 처리를 통한 물 재이용까지 가능하게 하는 전기화학적 제거 기술입니다.
                    </FullSubContent>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        실제 적용 사례: 축산분뇨 처리
                    </SubTitle>
                    <Carousel imgJson={imgJson} />
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default AnimalHusbandry;