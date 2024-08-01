import React, { useState } from 'react';

const performanceImg1 = '/assets/Business/Sewer/performanceImg1.png'
const performanceImg2 = '/assets/Business/Sewer/performanceImg2.png'
const techImg1 = '/assets/Business/Sewer/techImg1.png'
const techImg2 = '/assets/Business/Sewer/techImg2.png'
const techImg3 = '/assets/Business/Sewer/techImg3.png'
const techImg4 = '/assets/Business/Sewer/techImg4.png'


//style
import {
    TitleBar,
    BodyImg,
    ProcessImg,
    PerformanceImgBox,
    PerformanceImgContainer,
    PerformanceImg,
} from '../../../styles/Business/Sewer/style'

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
import SewerModal from './SewerModal';

const Sewer = () => {
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
                    Home · Business · 하/폐수분야
                    <TitleMainText>
                        하/폐수분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        하·폐수 분야
                    </SubLargeTitle>
                    <ImgSubContent>
                        하수 및 폐수를 초고도로 재이용하여 친환경 수자원으로 다시 활용됩니다.<br />
                        최종 처리수는 친수용수, 농업용수, 공업용수, 조경용수, 세척용수, 그리고 하천 유지용수로 사용됩니다.
                    </ImgSubContent>
                </SubColumnContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        수처리 프로세스
                    </SubTitle>
                    <ProcessImg />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        하수처리 재이용 시스템
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceImgContainer>
                            <PerformanceImg src={performanceImg1} alt="performanceImg" />
                            <PerformanceImg src={performanceImg2} alt="performanceImg" />
                        </PerformanceImgContainer>
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    제주도
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2009년
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
                                    전기촉매 + 분리막
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
                            전기촉매 기반의 분리막 재이용 고도처리
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg_4 src={techImg2} alt="TechImg" />
                            전기촉매 고액분리 기반의 RO 분리막
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg_4 src={techImg3} alt="TechImg" />
                            전처리 사이클론 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg_4 src={techImg4} alt="TechImg" />
                            전기촉매 고액분리 기반의 RO 분리막
                        </ImgDescription>
                    </SubImgContainer_4>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <SewerModal onClose={handleCloseModal} show={modalState} />
                    </ModalPortal>
                )}
            </MainContainer>
        </>
    );
};

export default Sewer;