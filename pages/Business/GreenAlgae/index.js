import React, { useState } from 'react';

//img

const performanceImg = '/assets/Business/GreenAlgae/performanceImg.png'
const techImg1 = '/assets/Business/GreenAlgae/techImg1.png'
const techImg2 = '/assets/Business/GreenAlgae/techImg2.png'
const techImg3 = '/assets/Business/GreenAlgae/techImg3.png'
const techImg4 = '/assets/Business/GreenAlgae/techImg4.png'


//style
import {
    TitleBar,
    BodyImg,
    PerformanceImg,
} from '../../../styles/Business/GreenAlgae/style'

import {
    SubLargeTitle,
    SubColumnContainer,
    ImgSubContent,
    SubTitle,
} from '../../../components/Body/bodyStyle';

import {
    TitleTextBox,
    TitleMainText,
    MainContainer,
    PerformanceContent,
    PerformanceImgBox,
    DescriptionBox,
    Description,
    DescriptionStyle,
    ImgDescription,
    More,
    Arrow,
    SubImgContainer_4,
    TechImg_4,
} from '../../../components/Body/businessStyle';

//Modal
import ModalPortal from '../../../modal/ModalPortal';
import GreenAlgaeModal from './GreenAlgaeModal';

const GreenAlgae = () => {
    const [modalState, setModalState] = useState(false);

    const handleOpenModal = () => {
        setModalState(true);
    };
    const handleCloseModal = () => {
        setModalState(false);
    };
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Business · 녹조분야
                    <TitleMainText>
                        녹조분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        녹조 분야
                    </SubLargeTitle>
                    <ImgSubContent>
                        BlueBS는 오염물질(녹조,부유물질,T-N, T-P, BOD, COD) 의 저감을 위한 최적화된 기술을 보유하고 있습니다.<br />
                        기존 시스템 공정에 비해 에너지 소비 효율을 크게 향상시킨 하이브리드 공정을 적용했습니며, 짧은 시간 내(약 10초)에 녹조를 제거하는 처리 능력을 극대화했습니다.
                    </ImgSubContent>
                </SubColumnContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        한국건설기술원
                        부유 이동형 녹조저감시스템(녹조선)
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceImg src={performanceImg} alt="performanceImg" />
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    낙동강
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2016년 8월
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                용량
                                <DescriptionStyle>
                                    5,000m3/d
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                맞춤형 공정
                                <DescriptionStyle>
                                    전기촉매
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                <More onClick={handleOpenModal}>
                                    실적 더보기
                                    <Arrow />
                                </More>
                            </Description>
                        </DescriptionBox>
                    </PerformanceImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        주요 기술
                    </SubTitle>
                    <SubImgContainer_4>
                        <ImgDescription>
                            <TechImg_4 src={techImg1} alt="TechImg" />
                            차량 이동형 녹조 제거 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg_4 src={techImg2} alt="TechImg" />
                            컨테이너 형 녹조 제거 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg_4 src={techImg3} alt="TechImg" />
                            녹조선 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg_4 src={techImg4} alt="TechImg" />
                            천연응집제
                        </ImgDescription>
                    </SubImgContainer_4>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <GreenAlgaeModal onClose={handleCloseModal} show={modalState} />
                    </ModalPortal>
                )}
            </MainContainer>
        </>
    );
};

export default GreenAlgae;