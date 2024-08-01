import React from 'react';

//img
const drinkingImg1 = '/assets/Products/Drinking/drinkingImg1.png';
const drinkingImg2 = '/assets/Products/Drinking/drinkingImg2.png';
const applyImg1 = '/assets/Products/Drinking/apply1.png';
const applyImg2 = '/assets/Products/Drinking/apply2.png';
const applyImg3 = '/assets/Products/Drinking/apply3.png';
const applyImg4 = '/assets/Products/Drinking/apply4.png';
const applyImg5 = '/assets/Products/Drinking/apply5.png';
const applyImg6 = '/assets/Products/Drinking/apply6.png';

//style
import {
    TitleBar,
    FullImg,
} from '../../../styles/Products/Drinking/style'

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
} from '../../../components/Body/productsStyle';

//carousel
import Carousel from '../ApplyCarousel/ApplyCarousel';

const Drinking = () => {
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
        },
        {
            src: applyImg6,
            alt: 'applyImg'
        }
    ];
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Products · 음용수/생활용수/담수화
                    <TitleMainText>
                        음용수/생활용수/담수화
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        정수 프로세스
                    </SubLargeTitle>
                    <FullSubContent>
                        레고 방식의 정수 시스템은 용도에 맞게 소형 또는 중형 모듈을 조합해 최적의 효율을 낼 수 있도록 설계되었습니다.<br />
                        원수의 특성에 맞춰 주처리, 전처리, 후처리 단계로 시스템을 구성하며, 컨테이너나 탑차 형태의 구조로 제작하여 외부 환경의 영향을 최소화한 콤팩트한 솔루션입니다.
                    </FullSubContent>
                    <FullImg src={drinkingImg1} alt="dringkingImg" />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        음용수·생활용수·담수화
                    </SubTitle>
                    <FullSubContent>
                        최근 남조류의 급속한 증가로 인해 곰팡이 냄새의 원인 물질인 2-MIB가 검출되고 있습니다.<br />
                        전기촉매 기술을 활용하면 이를 10분 이내에 99%까지, 10ppt 이하로 효과적으로 처리할 수 있습니다.
                    </FullSubContent>
                    <FullImg src={drinkingImg2} alt="dringkingImg" />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        실제 적용 사례: 정수 시스템
                    </SubTitle>
                    <Carousel imgJson={imgJson} />
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Drinking;