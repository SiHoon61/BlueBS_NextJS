import React, { useState } from 'react';

//img
const performanceVideo = '/assets/Business/Purify/performanceVideo.mp4'
const techImg1 = '/assets/Business/Purify/techImg1.png'
const techImg2 = '/assets/Business/Purify/techImg2.png'
const techImg3 = '/assets/Business/Purify/techImg3.png'


//style
import {
    TitleBar,
    BodyImg,
    PerformanceVideo,
} from '../../../styles/Business/Purify/style'

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
    More,
    Arrow,
    SubImgContainer_3,
    ImgDescription_3,
    TechImg_3,
    EmptyBox,
} from '../../../components/Body/businessStyle';

//Modal
import ModalPortal from '../../../modal/ModalPortal';
import PurifyModal from './PurifyModal';

const Purify = () => {
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
                    Home · Business · 정수분야
                    <TitleMainText>
                        정수분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        정수 분야
                    </SubLargeTitle>
                    <ImgSubContent>
                        BlueBS의 혁신적인 정수 기술을 통해 우리가 마시는 물을 안전하게 공급합니다.<br />
                        정수장 유입원수 내 맛냄새 유발물질인 2-MIB를 제거하는 시스템을 활용하여 안전한 먹는 물을 공급합니다.
                    </ImgSubContent>
                </SubColumnContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        생활용수 공급 시스템
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceVideo muted autoPlay loop playsInline>
                            <source src={performanceVideo} type="video/mp4" />
                        </PerformanceVideo>
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    충남 아산 구룡지구
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2023년
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                용량
                                <DescriptionStyle>
                                    10m3/d
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                맞춤형 공정
                                <DescriptionStyle>
                                    전기촉매 EF + VZ
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
                    <SubImgContainer_3>
                        <ImgDescription_3>
                            <TechImg_3 src={techImg1} alt="TechImg" />
                            차량용 이동식 담수화 시스템
                        </ImgDescription_3>
                        <ImgDescription_3>
                            <TechImg_3 src={techImg2} alt="TechImg" />
                            정수장 전처리 ZT 정수 시스템
                        </ImgDescription_3>
                        <ImgDescription_3>
                            <TechImg_3 src={techImg3} alt="TechImg" />
                            이동식 담수화 시스템
                        </ImgDescription_3>
                        <EmptyBox />
                    </SubImgContainer_3>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <PurifyModal onClose={handleCloseModal} show={modalState} />
                    </ModalPortal>
                )}


            </MainContainer>
        </>
    );
};

export default Purify;