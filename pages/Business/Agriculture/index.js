import React, { useState } from 'react';

//img
const agricultureImg1 = '/assets/Business/Agriculture/agricultureImg1.png'
const agricultureImg2 = '/assets/Business/Agriculture/agricultureImg2.png'
const performanceImg = '/assets/Business/Agriculture/performanceImg.png'
const techImg1 = '/assets/Business/Agriculture/techImg1.png'
const techImg2 = '/assets/Business/Agriculture/techImg2.png'
const techImg3 = '/assets/Business/Agriculture/techImg3.png'

//style
import {
    TitleBar,
    SubRowContainer,
    BodyImg,
    AgricultureImg,
    PerformanceImg,
} from './style'

import {
    ImgSubTitle,
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
import AgricultureModal from './AgricultureModal';

const Agriculture = () => {
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
                    Home · Business · 농업분야
                    <TitleMainText>
                        농업분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        농업환경 분야
                    </SubLargeTitle>
                    <ImgSubContent>
                        농업을 숨쉬게 하는 물, BlueBS가 함께합니다.<br />
                        생활하수를 재처리한 물에는 질소, 인 등의 영양분이 풍부하여 비옥한 토양이 만들어집니다.
                    </ImgSubContent>
                </SubColumnContainer>
                <BodyImg />
                <SubRowContainer style={{ flexDirection: 'row-reverse' }}>
                    <ImgSubContent>
                        <ImgSubTitle>
                            농업 분야
                        </ImgSubTitle>
                        농업분야의 물 부족 문제를 해결하기 위해, 하수처리수를 농업용수로 대체합니다. 하수처리수 중에는 벼 생육에 도음을 주는 유효 비료성분이 많이 포함되어 있어, 식물 재배에 필요한 비료 사용량을 최대 50%까지 줄일 수 있습니다. 또한, 농업용수로서 안정적인 수량 확보가 가능하며 가뭄대책 등 비상 상황에 활용할 수 있습니다.
                    </ImgSubContent>
                    <AgricultureImg src={agricultureImg1} alt="agricultureImg" $margin={"0px 100px 0px 0px;"} />
                </SubRowContainer>
                <SubRowContainer>
                    <ImgSubContent>
                        <ImgSubTitle>
                            환경 분야
                        </ImgSubTitle>
                        오염배출량을 감소시켜 수질을 개선하였으며, 수질오염 총량제에 기여하였습니다. 이를 통해 신규 수자원 개발 비용을 절감하는 동시에 물 산업의 발전을 촉진시키는 등 다양한 직·간접적인 효과를 나타냈습니다.<br /> 저희는 환경 보호와 지속 가능한 발전에 앞장서는 역할을 수행하고 있으며, 지역 사회와 전 세계적으로 긍정적인 변화를 이끌어 나갈 것을 약속드립니다.
                    </ImgSubContent>
                    <AgricultureImg src={agricultureImg2} alt="agricultureImg" $margin={"0px 0px 0px 100px;"} />
                </SubRowContainer>

                <SubColumnContainer>
                    <SubTitle>
                        대표 실적
                    </SubTitle>
                    <PerformanceContent>
                        한국농어촌공사 농업용수 여과시스템
                    </PerformanceContent>
                    <PerformanceImgBox>
                        <PerformanceImg src={performanceImg} alt="performanceImg" />
                        <DescriptionBox>
                            <Description>
                                위치
                                <DescriptionStyle>
                                    제주도 성읍 지구
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                준공일
                                <DescriptionStyle>
                                    2015년
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                용량
                                <DescriptionStyle>
                                    30,000m3/d
                                </DescriptionStyle>
                            </Description>
                            <Description>
                                맞춤형 공정
                                <DescriptionStyle>
                                    FDA/MSF
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
                            새만금 MSF / FDA 여과 농업용수 공급
                        </ImgDescription_3>
                        <ImgDescription_3>
                            <TechImg_3 src={techImg2} alt="TechImg" />
                            김해시 화목 MSF / FDA 여과 농업용수 공급
                        </ImgDescription_3>
                        <ImgDescription_3>
                            <TechImg_3 src={techImg3} alt="TechImg" />
                            김해시 안양 정수장 마이크로시스티 제거
                        </ImgDescription_3>
                        <EmptyBox />
                    </SubImgContainer_3>
                </SubColumnContainer>
                {modalState && (
                    <ModalPortal>
                        <AgricultureModal onClose={handleCloseModal} show={modalState} />
                    </ModalPortal>
                )}
            </MainContainer>
        </>
    );
};

export default Agriculture;