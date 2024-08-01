import React from 'react';

//img
const nanoImg1 = '/assets/Technology/nanoImg1.png'
const nanoVideo2 = '/assets/Technology/nanoVideo2.mp4'
const nanoVideo3 = '/assets/Technology/nanoVideo3.mp4'
const nanoExample1 = '/assets/Technology/nanoExample1.png'
const nanoExample2 = '/assets/Technology/nanoExample2.png'
const nanoExample3 = '/assets/Technology/nanoExample3.png'
const software1 = '/assets/Technology/software1.png'
const software2 = '/assets/Technology/software2.png'
const software3 = '/assets/Technology/software3.png'
const software4 = '/assets/Technology/software4.png'

//table
import NanoTable from './NanoTable'

//style
import {
    TitleBar,
    TitleTextBox,
    TitleSubText,
    TitleMainText,
    MainContainer,
    SubRowContainer,
    ExampleSubTitle,
    ImgDescription,
    NanoImgBox,
    NanoImg1,
    NanoVideo2,
    NanoVideo3,
    NanoFeatureImg,
    NanoBirdImg,
    NanoExampleBox,
    NanoExampleImg,
    NanoMonitoring,
    NanoDevelopImg,
    NanoSoftWareBox,
    NanoSoftWareImg,
    GreyDescription,
    GreyStyle,
} from '../../../styles/Technology/NanoBubble/style'
import {
    SubLargeTitle,
    SubColumnContainer,
    FullSubContent,
    SubTitle,
    ImgSubTitle,
    ImgSubContent,
} from '../../../components/Body/bodyStyle'

const Nanobubble = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Technology · 울트라 나노버블
                    <TitleSubText>
                        막힘 없는
                    </TitleSubText>
                    <TitleMainText>
                        울트라 나노버블
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        울트라 나노버블 (Ultra Nano Bubble)
                    </SubLargeTitle>
                    <FullSubContent>
                        123nm 크기의 나노버블은 활발한 브라운 운동을 보이며, 평소에는 무색이지만 강제로 충돌시키면 밀크색 마이크로버블로 변환됩니다.
                        나노버블은 물과 잘 섞이지 않는 소수성을 가지며, 안정적인 구조로 오랜 시간 지속되고, 중성 부력으로 물속에서 떠오르거나 가라앉지 않습니다.
                        이러한 특징을 활용해, 저희는 바이러스부터 녹조에 이르기까지 다양한 물 속 부유물질을 효과적으로 제거합니다.
                    </FullSubContent>
                    <NanoImgBox>
                        <ImgDescription>
                            <NanoImg1 src={nanoImg1}>
                            </NanoImg1>
                            초순수/나노수
                        </ImgDescription>
                        <ImgDescription>
                            <NanoVideo2 muted autoPlay loop playsInline>
                                <source src={nanoVideo2} type="video/mp4" />
                            </NanoVideo2>
                            울트라 나노버블의 브라운 운동영상
                        </ImgDescription>
                        <ImgDescription>
                            <NanoVideo3 muted autoPlay loop playsInline>
                                <source src={nanoVideo3} type="video/mp4" />
                            </NanoVideo3>
                            나노버블 대량 생산 영상
                        </ImgDescription>
                    </NanoImgBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        나노버블의 정의 및 특징
                    </SubTitle>
                    <FullSubContent>
                        나노버블은 극미세한 기포로서 전기적으로 충전된 표면을 통해 다른 물질과의 상호작용을 가능하게 합니다.
                        이러한 나노버블은 물리적, 화학적, 생물학적 과정을 향상시킬 수 있는 특별한 성질을 지니고 있습니다.
                    </FullSubContent>
                    <NanoFeatureImg />
                </SubColumnContainer>
                <SubRowContainer>
                    <ImgSubContent>
                        <ImgSubTitle>
                            나노버블의 우수성
                        </ImgSubTitle>
                        기존의 나노버블 발생장치는 주로 청정한 물에서 사용되는 기술로, 이물질이 많거나 유체의 속도가 빠른 환경에서의 적용이 어려웠습니다.<br />
                        그러나, 본 기술은 이물질 유입이나 난류의 방해를 받지 않으면서도 고품질의 나노버블을 안정적으로 생산할 수 있습니다.
                    </ImgSubContent>
                    <NanoBirdImg />
                </SubRowContainer>
                <SubColumnContainer>
                    <SubTitle>
                        나노버블 생성 방식 비교
                    </SubTitle>
                    <FullSubContent>
                        난류정적 방식은 이물질의 유입이나 막힘 문제 없이 대규모 나노버블을 생산하기에 적합한 방법입니다.
                    </FullSubContent>
                    <NanoTable />
                </SubColumnContainer>
                <SubRowContainer>
                    <ImgSubContent>
                        <ImgSubTitle>
                            나노버블 생성 모니터링 시스템
                        </ImgSubTitle>
                        산란 레이저 원리를 기반으로 한 나노 버블 모니터링 시스템입니다.<br />
                        이 시스템은 중력이나 센서용 샘플 펌프를 통해 샘플 물을 지속적으로 공급받으며, 0에서 1000 사이의 레이저 신호 값을 통해 기포 농도를 대략 추정할 수 있습니다.
                        이를 통해 제조 공정에서 나노버블의 지속적 생성 여부를 확인하고, 실험실 및 연구실에서 나노버블의 농도 수준을 측정합니다.<br />기포 농도가 과도하게 높거나 낮은 경우 경고를 발생시켜 버블 발생기의 작동 및 정지를 조절할 수 있습니다.
                    </ImgSubContent>
                    <NanoMonitoring />
                </SubRowContainer>
                <SubColumnContainer>
                    <SubTitle>
                        미세기포 측정장비 및 소프트웨어 개발
                    </SubTitle>
                    <FullSubContent>
                        고품질 미세기포를 측정하기 위해 현미경과 고성능 카메라를 활용한 이미지 촬영 과정을 시연합니다.
                    </FullSubContent>
                    <NanoDevelopImg />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        미세기포 측정 소프트웨어
                    </SubTitle>
                    <FullSubContent>
                        광학 기반의 분석툴을 활용하여 미세기포 이미징을 통해 크기와 분포를 분석합니다.
                    </FullSubContent>
                    <NanoSoftWareBox>
                        <ImgDescription>
                            <NanoSoftWareImg src={software1} alt="software" />
                            측정준비
                        </ImgDescription>
                        <ImgDescription>
                            <NanoSoftWareImg src={software2} alt="software" />
                            이미지 추적
                        </ImgDescription>
                        <ImgDescription>
                            <NanoSoftWareImg src={software3} alt="software" />
                            라벨링
                        </ImgDescription>
                        <ImgDescription>
                            <NanoSoftWareImg src={software4} alt="software" />
                            개수/사이즈 측정
                        </ImgDescription>
                    </NanoSoftWareBox>
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        나노버블 발생장치 적용사례
                    </SubTitle>
                    <NanoExampleBox>
                        <ImgDescription>
                            <NanoExampleImg src={nanoExample1} alt="nano example" />
                            <GreyDescription>
                                울트라 나노버블 세척장치 <GreyStyle>(N-1)</GreyStyle>
                            </GreyDescription>
                        </ImgDescription>
                        <ImgDescription>
                            <NanoExampleImg src={nanoExample2} alt="nano example" />
                            <GreyDescription>
                                울트라 나노버블 세척장치 <GreyStyle>(N-2)</GreyStyle>
                            </GreyDescription>
                        </ImgDescription>
                        <ImgDescription>
                            <NanoExampleImg src={nanoExample3} alt="nano example" />
                            <GreyDescription>
                                울트라 나노버블 공기정화 장치 <GreyStyle>(N-3)</GreyStyle>
                            </GreyDescription>
                        </ImgDescription>
                    </NanoExampleBox>
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Nanobubble;