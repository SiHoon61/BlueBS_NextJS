import React, { useState } from 'react';

//img
const certification1 = '/assets/Company/Awards/certification1.png'
const certification2 = '/assets/Company/Awards/certification2.png'
const certification3 = '/assets/Company/Awards/certification3.png'
const certification4 = '/assets/Company/Awards/certification4.png'
const certification5 = '/assets/Company/Awards/certification5.png'
const certification6 = '/assets/Company/Awards/certification6.png'
const certification7 = '/assets/Company/Awards/certification7.png'
const certification8 = '/assets/Company/Awards/certification8.png'
const certification9 = '/assets/Company/Awards/certification9.png'
const certification10 = '/assets/Company/Awards/certification10.png'
const certification11 = '/assets/Company/Awards/certification11.png'
const certification12 = '/assets/Company/Awards/certification12.png'
const award1 = '/assets/Company/Awards/award1.png'
const award2 = '/assets/Company/Awards/award2.png'
const award3 = '/assets/Company/Awards/award3.png'
const award4 = '/assets/Company/Awards/award4.png'
const award5 = '/assets/Company/Awards/award5.png'
const patent0 = '/assets/Company/Awards/patent0.png'
const patent1 = '/assets/Company/Awards/patent1.png'
const patent2 = '/assets/Company/Awards/patent2.png'
const patent3 = '/assets/Company/Awards/patent3.png'
const patent4 = '/assets/Company/Awards/patent4.png'
const patent5 = '/assets/Company/Awards/patent5.png'
const patent6 = '/assets/Company/Awards/patent6.png'
const patent8 = '/assets/Company/Awards/patent8.png'
const patent9 = '/assets/Company/Awards/patent9.png'
const patent10 = '/assets/Company/Awards/patent10.png'
const patent11 = '/assets/Company/Awards/patent11.png'
const patent12 = '/assets/Company/Awards/patent12.png'
const patent13 = '/assets/Company/Awards/patent13.png'
const patent14 = '/assets/Company/Awards/patent14.png'
const patent15 = '/assets/Company/Awards/patent15.png'
const patent16 = '/assets/Company/Awards/patent16.png'
const patent17 = '/assets/Company/Awards/patent17.png'
const patent18 = '/assets/Company/Awards/patent18.png'
const patent19 = '/assets/Company/Awards/patent19.png'
const patent20 = '/assets/Company/Awards/patent20.png'

//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    ButtonBox,
    CertificationButtonText,
    AwardsButtonText,
    PatentButtonText,
    EmptyColumn,
    CertificationPart,
    AwardsPart,
    PatentPart,
    AwardBox,
    AwardDescription,
    AwardName,
    AwardImg,
    NoBorderAwardImg,
} from './style'

const Awards = () => {
    const [isSelect, setIsSelect] = useState('0');

    const certificationClickHandler = () => {
        setIsSelect('0');
    }

    const awardsClickHandler = () => {
        setIsSelect('1');
    }

    const patentClickHandler = () => {
        setIsSelect('2');
    }

    const certificationImgJson = [
        {
            src: certification12,
            alt: 'applyImg',
            no: '제 2023-7 호',
            name: 'KRC신기술 인증서',
        },
        {
            src: certification11,
            alt: 'applyImg',
            no: '제 51-137 호',
            name: '신기술 인증서',
        },
        {
            src: certification10,
            alt: 'applyImg',
            no: '제 2022-351 호',
            name: '혁신제품 지정 인증서',
        },
        {
            src: certification9,
            alt: 'applyImg',
            no: '제 20220914030036 호',
            name: '벤처기업 확인서',
        },
        {
            src: certification8,
            alt: 'applyImg',
            no: '제 20150113742 호',
            name: '벤처기업 확인서',
        },
        {
            src: certification7,
            alt: 'applyImg',
            no: '제 2009112311 호',
            name: '기업부설연구소 인정서',
        },
        {
            src: certification6,
            alt: 'applyImg',
            no: 'GT-20-00822',
            name: '녹색기술 인증서',
        },
        {
            src: certification5,
            alt: 'applyImg',
            no: 'GT-16-00123',
            name: '녹색기술 인증서',
        },
        {
            src: certification4,
            alt: 'applyImg',
            no: 'GT-11-00012',
            name: '녹색전문기업 확인서',
        },
        {
            src: certification3,
            alt: 'applyImg',
            no: 'GT-11-00012',
            name: '녹색전문기업 확인서',
        },
        {
            src: certification2,
            alt: 'applyImg',
            no: 'GT-11-00001',
            name: '녹색기술 인증서',
        },
        {
            src: certification1,
            alt: 'applyImg',
            no: 'GT-11-00001',
            name: '녹색기술 인증서',

        }
    ];

    const awardsImgJson = [
        {
            src: award5,
            alt: 'applyImg',
            name: '농림축산식품부장관 표창장',
        },
        {
            src: award4,
            alt: 'applyImg',
            name: '농림축산식품부장관 표창장',
        },
        {
            src: award3,
            alt: 'applyImg',
            name: '환경부장관 표창장',
        },
        {
            src: award2,
            alt: 'applyImg',
            name: '미래선도 기업 인증서',
        },
        {
            src: award1,
            alt: 'applyImg',
            name: '녹색경영대상',

        }
    ];

    const patentImgJson = [
        {
            src: patent0,
            alt: 'applyImg',
            no: 'US 8361327 B2',
            name: '전기분해 전처리를 이용한 농업용수 공급 시스템',

        },
        {
            src: patent20,
            alt: 'applyImg',
            no: '제 10-1913754 호',
            name: '일체형 고액 분리장치 및 이를 이용한 분리방법',
        },
        {
            src: patent19,
            alt: 'applyImg',
            no: '제 10-1853095 호',
            name: '수중 조류 제거방법',
        },
        {
            src: patent18,
            alt: 'applyImg',
            no: '제 10-1702346 호',
            name: '이동식 부유물 제거 장치 및 방법',
        },
        {
            src: patent17,
            alt: 'applyImg',
            no: '제 10-1702345 호',
            name: '초고속 조류 제거 장치 및 방법',
        },
        {
            src: patent16,
            alt: 'applyImg',
            no: '제 10-1675574 호',
            name: '하수처리장 방류수를 재이용수로 전환하는 장치',
        },
        {
            src: patent15,
            alt: 'applyImg',
            no: '제 10-1657220 호',
            name: '질소와 인을 함유한 폐수의 초고속 처리 및 방법',
        },
        {
            src: patent14,
            alt: 'applyImg',
            no: '제 10-1617369 호',
            name: '다중 멀티사이클론을 활용한 부유물질/COD 저감용 수처리 공정',
        },
        {
            src: patent13,
            alt: 'applyImg',
            no: '제 10-1612879 호',
            name: '하수의 질소, 인 및 부유물 제거 장치 및 방법',
        },
        {
            src: patent12,
            alt: 'applyImg',
            no: '제 10-1612440 호',
            name: '초고속 고액분리 시스템을 구비한 기수담수화 장치',
        },
        {
            src: patent11,
            alt: 'applyImg',
            no: '제 10-1328570 호',
            name: '막 세척용 세정수 공급장치',
        },
        {
            src: patent10,
            alt: 'applyImg',
            no: '제 10-1206476 호',
            name: '하천/하수처리장의 방류수를 재이용한 농업용수 공급장치',
        },
        {
            src: patent9,
            alt: 'applyImg',
            no: '제 10-1206477 호',
            name: '하천 및 하수처리장 방류수의 농업용수 재이용 방법',
        },
        {
            src: patent8,
            alt: 'applyImg',
            no: '제 10-1192809 호',
            name: '극미세 버블수 발생장치',
        },
        {
            src: patent6,
            alt: 'applyImg',
            no: '제 10-1176988 호',
            name: ' 기수의 담수화 처리장치 및 이를 이용한 기수의 담수화 방법',
        },
        {
            src: patent5,
            alt: 'applyImg',
            no: '제 10-1131383 호',
            name: '공업용수 및 음용수 공급장치',
        },
        {
            src: patent4,
            alt: 'applyImg',
            no: '제 10-0909477 호',
            name: '철 이온화 모듈을 포함하는 농업용수 재활용 시스템 및 이를 이용한 농업용수 재활용 방법',
        },
        {
            src: patent3,
            alt: 'applyImg',
            no: '제 10-0895524 호',
            name: '농업용 청정수 공급시스템 및 이를 이용한 농업용 청정수로의 전환방법',
        },
        {
            src: patent2,
            alt: 'applyImg',
            no: '제 10-0893565 호',
            name: '기수의 농도별 염분제거 시스템 및 이를 이용한 염분제거 방법',
        },
        {
            src: patent1,
            alt: 'applyImg',
            no: '제 10-0839026 호',
            name: '기수의 담수화시스템 및 이를 이용하여 기수를 농업 재이용수로 전환하는 방법',
        }
    ];
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Company · 인증 및 수상
                    <TitleMainText>
                        인증 및 수상
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <ButtonBox>
                    <CertificationButtonText onClick={certificationClickHandler}
                        $isSelect={isSelect}>
                        인증서
                    </CertificationButtonText>
                    <AwardsButtonText onClick={awardsClickHandler}
                        $isSelect={isSelect}>
                        수상
                    </AwardsButtonText>
                    <PatentButtonText onClick={patentClickHandler}
                        $isSelect={isSelect}>
                        특허
                    </PatentButtonText>
                </ButtonBox>
                <EmptyColumn $isSelect={isSelect} />
                <CertificationPart $isSelect={isSelect}>
                    {certificationImgJson.map((list, index) => (
                        <AwardBox key={index}>
                            <NoBorderAwardImg src={list.src} alt={list.alt} />
                            <AwardDescription>
                                {list.no}
                                <AwardName>
                                    {list.name}
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                    ))}
                </CertificationPart>
                <AwardsPart $isSelect={isSelect}>
                    {awardsImgJson.map((list, index) => (
                        <AwardBox key={index}>
                            <NoBorderAwardImg src={list.src} alt={list.alt} />
                            <AwardDescription>
                                {list.no}
                                <AwardName>
                                    {list.name}
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                    ))}
                </AwardsPart>
                <PatentPart $isSelect={isSelect}>
                    {patentImgJson.map((list, index) => (
                        <AwardBox key={index}>
                            <AwardImg src={list.src} alt={list.alt} />
                            <AwardDescription>
                                {list.no}
                                <AwardName>
                                    {list.name}
                                </AwardName>
                            </AwardDescription>
                        </AwardBox>
                    ))}
                </PatentPart>

            </MainContainer>

        </>
    );
};

export default Awards;