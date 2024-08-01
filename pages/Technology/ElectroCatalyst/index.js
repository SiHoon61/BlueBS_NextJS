import React from 'react';

//img
const ef1 = '/assets/Technology/ef1.svg'
const ef2 = '/assets/Technology/ef2.svg'
const ef3 = '/assets/Technology/ef3.svg'
const ef4 = '/assets/Technology/ef4.svg'

import {
    TitleBar,
    TitleTextBox,
    TitleSubText,
    TitleMainText,
    MainContainer,
    SubRowContainer,
    ElecImg1,
    EFImgBox,
    EfImg,
} from '../../../styles/Technology/ElectroCatalyst/style';

import {
    SubColumnContainer,
    FullSubContent,
    SubTitle,
    ImgSubTitle,
    ImgSubContent,
} from '../../../components/Body/bodyStyle'

//table
import GenerationTable from './GenerationTable';
import AdvantageTable from './AdvantageTable'
import ComparisonTable from './ComparisonTable'
const ElectroCatalyst = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Technology · 전기 촉매 필터
                    <TitleSubText>
                        신개념 초격차
                    </TitleSubText>
                    <TitleMainText>
                        전기 촉매 필터
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubRowContainer>
                    <ImgSubContent>
                        <ImgSubTitle>
                            전기촉매 필터(Electrocatalyst Filter)
                        </ImgSubTitle>
                        티타늄(Ti) 모재에 나노탄소와 혼합금속물질을
                        최적비율로 혼합하여 만든 전기촉매(Electrocatalyst Filter)입니다.
                        높은 비표면적, 강력한 촉매반응과 안정성과
                        무엇보다 전력소모량과 고속 반응 속도를 자랑합니다.
                    </ImgSubContent>
                    <ElecImg1 />
                </SubRowContainer>

                <SubColumnContainer>
                    <SubTitle>
                        전기촉매 기술 발전사
                    </SubTitle>
                    <FullSubContent>
                        다면적 접촉 소재를 모듈화하여, 매우 높은 반응수율을 가진 전기촉매소재를 개발하였습니다.
                    </FullSubContent>
                    <GenerationTable />
                </SubColumnContainer>

                <SubColumnContainer>
                    <SubTitle>
                        차별성 및 우수성
                    </SubTitle>
                    <FullSubContent>
                        기존 상업용 소재보다 우수한 오염물질 제거 성능을 자랑하는 전기촉매 필터입니다.
                    </FullSubContent>
                    <AdvantageTable />
                </SubColumnContainer>
                
                <SubColumnContainer>
                    <SubTitle>
                        세계최초 초격차 고속 선택적 질소/TOC/DOC 처리 전기촉매(EF) 기술 확보
                    </SubTitle>
                    <FullSubContent>
                        기존의 소재들은 반응시간이 길고, 반응장치의 크기가 커지며, 에너지 및 동력 비용이 많이 들어갑니다. 하지만 전기촉매(EF) 기술을 사용하면, 하폐수 및 하천수를 농도에 따라 단 10분 내에 80% 이상 처리할 수 있습니다.

                        상업용으로 사용되는 불용성 DSA와 붕소계 BBD 전기촉매 소재와 비교할 때, 이 기술은 훨씬 빠른 반응속도를 자랑합니다. 특히, 저농도의 용존유기탄소(DOC)를 단 5분 만에 50% 제거하는 놀라운 산화 능력을 보여줍니다.
                    </FullSubContent>
                    <EFImgBox>
                        <EfImg src={ef1} alt='ef' />
                        <EfImg src={ef2} alt='ef' />
                        <EfImg src={ef3} alt='ef' />
                        <EfImg src={ef4} alt='ef' />
                    </EFImgBox>

                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        산화력 기술 비교
                    </SubTitle>
                    <FullSubContent>
                        전기촉매(EF) 기술은 오존(O3) 및 저온 프라즈마 AOP 기술에 비해 뛰어난 산화 능력을 갖추고 있으며, 낮은 에너지 소비와 유지관리 비용에서도 우수한 성능을 보입니다.
                    </FullSubContent>
                    <ComparisonTable />
                </SubColumnContainer>

            </MainContainer>
        </>
    );
};

export default ElectroCatalyst;