import React, { useState } from 'react';

//img

const performanceImg = '/assets/Business/AnimalHusbandry/performanceImg.png'
const techImg1 = '/assets/Business/AnimalHusbandry/techImg1.png'
const techImg2 = '/assets/Business/AnimalHusbandry/techImg2.png'
const techImg3 = '/assets/Business/AnimalHusbandry/techImg3.png'
const techImg4 = '/assets/Business/AnimalHusbandry/techImg4.png'

//style
import {
    TitleBar,
    BodyImg,
    PerformanceImg,
} from './style'

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
import AnimalHusbandryModal from './AnimalHusbandryModal';

const AnimalHusbandry = () => {
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
                    Home · Business · 축산분뇨 & 폐수처리분야
                    <TitleMainText>
                        축산분뇨 & 폐수처리분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        축산분뇨 & 폐수처리 분야
                    </SubLargeTitle>
                    <ImgSubContent >
                        BlueBS는 전기 촉매 전극 시스템을 활용하여 고농도 오염물을 효과적으로 처리합니다.<br />
                        저희만의 맞춤형 촉매 전극을 활용하여 안전한 유지관리 및 에너지 저감, 그리고 환경오염을 줄이는 친환경 기술입니다
                    </ImgSubContent>
                </SubColumnContainer>
                <BodyImg />
                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        이천시
                        유원농장 축산분뇨 시설
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceImg src={performanceImg} alt="performanceImg" />
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    이천시 여주군 유원농장
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2023년 5월
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                용량
                                <DescriptionStyle>
                                    20m3/d
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                맞춤형 공정
                                <DescriptionStyle>
                                    전기촉매시스템
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
                            전기촉매 고도처리 연계 순환형 액비
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg_4 src={techImg2} alt="TechImg" />
                            축산 분뇨 처리 과정
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg_4 src={techImg3} alt="TechImg" />
                            페수 인 및 부유물질 처리 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg_4 src={techImg4} alt="TechImg" />
                            두부 폐수처리 시스템
                        </ImgDescription>
                    </SubImgContainer_4>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <AnimalHusbandryModal onClose={handleCloseModal} show={modalState} />
                    </ModalPortal>
                )}
            </MainContainer>
        </>
    );
};

export default AnimalHusbandry;