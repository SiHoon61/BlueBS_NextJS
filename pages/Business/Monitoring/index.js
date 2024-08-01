import React from 'react';

//img
const monitoringBody = '/assets/Business/Monitoring/MonitoringBody.png'
const performanceImg = '/assets/Business/Monitoring/performanceImg.png'
const techImg1 = '/assets/Business/Monitoring/techImg1.png'
const techImg2 = '/assets/Business/Monitoring/techImg2.png'
const techImg3 = '/assets/Business/Monitoring/techImg3.png'


//style
import {
    TitleBar,
    BodyImg,
    FullImg,
    SubImgContainer,
    TechImg,
    ImgDescription,
} from '../../../styles/Business/Monitoring/style'

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
} from '../../../components/Body/businessStyle';

const Monitoring = () => {

    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Business · 운영관리분야
                    <TitleMainText>
                        운영관리분야
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        운영관리 분야
                    </SubLargeTitle>
                    <ImgSubContent>
                        EF 전기촉매-FDA/MSF 여과기에 대한 설계, 제작, 시공, 시운전에 이르는 전체 솔루션을 제공합니다.<br />
                        휴대폰 및 태블릿 PC를 통한 원격 모니터링 관리가 가능합니다.
                    </ImgSubContent>
                </SubColumnContainer>
                <BodyImg $imageUrl={monitoringBody} />
                <SubColumnContainer>
                    <SubTitle>
                        운영관리 시스템
                    </SubTitle>
                    <FullImg src={performanceImg} alt="performanceImg" />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        주요 실적
                    </SubTitle>
                    <SubImgContainer>
                        <ImgDescription>
                            <TechImg src={techImg1} alt="TechImg" />
                            원격제어 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg2} alt="TechImg" />
                            원격제어 시스템
                        </ImgDescription>
                        <ImgDescription>
                            <TechImg src={techImg3} alt="TechImg" />
                            원격제어 시스템
                        </ImgDescription>
                    </SubImgContainer>
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Monitoring;