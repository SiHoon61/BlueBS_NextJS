import React from 'react';

//img
const labImg1 = '/assets/Company/laboratory1.png'
const labImg2 = '/assets/Company/laboratory2.png'
const labImg3 = '/assets/Company/laboratory3.png'
const labImg4 = '/assets/Company/laboratory4.png'

//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubCenterTitle,
    SubLabContainer,
    SubjectBox,
    Subject,
    LabImgBox,
    LabImg,
} from '../../../styles/Company/Laboratory/style'

import {
    SubLargeTitle,
    FullSubContent,
    SubColumnContainer,
} from '../../../components/Body/bodyStyle';

const Laboratory = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Company · 기업부설연구소
                    <TitleMainText>
                        기업부설연구소
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        기업부설연구소
                    </SubLargeTitle>
                    <FullSubContent>
                        BlueBS 연구소는 나노촉매 소재, 친환경 고효율 공정, 측정장비 고효율화 및 탄소 중립 자원화 분야에 집중 투자하고 있습니다.
                        아울러 그간 처리하기 어려운 농축수 및 질소를 저비용 친환경적으로 처리할 수 있는 기술을 개발 중에 있고, 최근 정수장 내 남조류 이취미 물질을 효과적으로 처리할 수 있는 기술을 개발하여 제품화하였습니다.
                    </FullSubContent>
                </SubColumnContainer>
                <SubLabContainer>
                    <SubCenterTitle>
                        연구개발 집중 투자 분야
                    </SubCenterTitle>
                    <SubjectBox>
                        <Subject>
                            나노촉매 소재
                        </Subject>
                        <Subject>
                            친환경 고효율 공정
                        </Subject>
                        <Subject>
                            측정장비 고효율화
                        </Subject>
                        <Subject>
                            탄소중립 자원화 기술
                        </Subject>
                    </SubjectBox>
                    <LabImgBox>
                        <LabImg src={labImg1} alt="lab1" />
                        <LabImg src={labImg2} alt="lab2" />
                    </LabImgBox>
                </SubLabContainer>
                <SubLabContainer>
                    <SubCenterTitle>
                        미래 기술 개발 진행중
                    </SubCenterTitle>
                    <SubjectBox>
                        <Subject>
                            친환경 농축수 처리
                        </Subject>
                        <Subject>
                            저비용 질소 처리
                        </Subject>
                        <Subject>
                            인공지능 광학측정
                        </Subject>
                        <Subject>
                            고농도 폐수처리
                        </Subject>
                    </SubjectBox>
                    <LabImgBox>
                        <LabImg src={labImg3} alt="lab3" />
                        <LabImg src={labImg4} alt="lab4" />
                    </LabImgBox>
                </SubLabContainer>
            </MainContainer>
        </>
    );
};

export default Laboratory;