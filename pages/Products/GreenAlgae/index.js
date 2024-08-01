import React from 'react';

//img
const processImg1 = '/assets/Products/GreenAlgae/process1.png';
const processImg2 = '/assets/Products/GreenAlgae/process2.png';
const processVideo3 = '/assets/Products/GreenAlgae/process4.mp4';
const beforeImg = '/assets/Products/GreenAlgae/before.png';
const afterImg = '/assets/Products/GreenAlgae/after.png';
const tech1 = '/assets/Products/GreenAlgae/tech1.png';
const tech2 = '/assets/Products/GreenAlgae/tech2.png';
const applyImg1 = '/assets/Products/GreenAlgae/apply1.png';
const applyImg2 = '/assets/Products/GreenAlgae/apply2.png';
const applyImg3 = '/assets/Products/GreenAlgae/apply3.png';
const applyImg4 = '/assets/Products/GreenAlgae/apply4.png';
const applyImg5 = '/assets/Products/GreenAlgae/apply5.png';

//style
import {
    TitleBar,
    CompareImgBox,
    CompareImgs,
    ProcessVideo,
    CompareArrow,
    CompareDescription,
    ImgBox,
    Imgs,
    PlusImg,
} from '../../../styles/Products/GreenAlgae/style'

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
    ProcessBox,
    EmptyBox,
    ProcessImgs,
    ProcessArrow,
    ImgDescription,
    GreyDescription,
    EmptyDescription,
} from '../../../components/Body/productsStyle';

//carousel
import Carousel from '../ApplyCarousel/ApplyCarousel';

const GreenAlgae = () => {
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
    ];
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Products · 녹조/저수지 복원 및 유지
                    <TitleMainText>
                        녹조/저수지 복원 및 유지
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        축산분뇨 처리 프로세스
                    </SubLargeTitle>
                    <FullSubContent>
                        BlueBS의 맞춤형 촉매 전극은 축산분뇨 처리에 있어 효과적이며, 유지보수 및 에너지 절감을 지원하는 동시에 환경오염 감소에 기여하는 친환경적인 솔루션을 제공합니다.
                    </FullSubContent>
                    <ProcessBox>
                        <EmptyBox/>
                        <ImgDescription>
                            <ProcessImgs src={processImg1} alt="processImg" $width={"410px"} />
                            하천/강 녹조 발생
                            <EmptyDescription />
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <ProcessImgs src={processImg2} alt="processImg" $width={"410px"} />
                            응집 플럭 반응
                            <GreyDescription>
                                (천연응집제 사용)
                            </GreyDescription>
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <ProcessVideo muted autoPlay loop playsInline>
                                <source src={processVideo3} type="video/mp4" />
                            </ProcessVideo>
                            고속 조류 부상분리
                            <GreyDescription>
                                (고속 전기 촉매 모듈 )
                            </GreyDescription>
                        </ImgDescription>
                    </ProcessBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        녹조 제거 전·후 비교
                    </SubTitle>
                    <FullSubContent>
                        에너지 소비 효율을 극대화하는 하이브리드 공정을 적용하여, 급격히 오염된 지역에서도 실시간 처리가 가능한 공정 시스템을 제공합니다.
                    </FullSubContent>
                    <CompareImgBox>
                        <CompareDescription>
                            <CompareImgs src={beforeImg} alt="beforeImg"/>
                            Before
                        </CompareDescription>
                        <CompareArrow />
                        <CompareDescription>
                            <CompareImgs src={afterImg} alt="afterImg" />
                            After
                        </CompareDescription>
                    </CompareImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        저수지 복원 기술
                    </SubTitle>
                    <FullSubContent>
                        여름철 일시적인 녹조 제거에 그치지 않고, 연중 언제 어디서나 수질 기준을 충족할 수 있는 전기촉매 기술입니다.<br />
                        호소 부유 설치에 따른 시공간적 제약을 극복하기 위해, 이동식 스테이션을 설치하고 운영합니다.<br />
                        전기촉매와 나노버블 생성 기술을 결합하여 부영양화를 유발하는 원인과 전구물질을 파괴하고, 용존산소를 공급합니다.
                    </FullSubContent>
                    <ImgBox>
                        <CompareDescription>
                            <Imgs src={tech1} alt="Img" />
                            전기촉매 + 나노버블
                        </CompareDescription>
                        <PlusImg />
                        <CompareDescription>
                            <Imgs src={tech2} alt="Img"  />
                            스마트 센싱 수질개선
                        </CompareDescription>
                    </ImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        실제 적용 사례: 녹조 제거 및 저수지 복원
                    </SubTitle>
                    <Carousel imgJson={imgJson} />
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default GreenAlgae;