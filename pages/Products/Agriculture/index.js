import React from 'react';

//img
const processImg1 = '/assets/Products/Agriculture/process1.png'
const processImg2 = '/assets/Products/Agriculture/process2.png'
const processImg3 = '/assets/Products/Agriculture/process3.png'
const agriculture1 = '/assets/Products/Agriculture/agriculture1.png'
const agriculture2 = '/assets/Products/Agriculture/agriculture2.png'
const applyImg1 = '/assets/Products/Agriculture/apply1.png'
const applyImg2 = '/assets/Products/Agriculture/apply2.png'
const applyImg3 = '/assets/Products/Agriculture/apply3.png'
const applyImg4 = '/assets/Products/Agriculture/apply4.png'
const applyImg5 = '/assets/Products/Agriculture/apply5.png'
const applyImg6 = '/assets/Products/Agriculture/apply6.png'
const applyImg7 = '/assets/Products/Agriculture/apply7.png'
const applyImg8 = '/assets/Products/Agriculture/apply8.png'
const applyImg9 = '/assets/Products/Agriculture/apply9.png'
const applyImg10 = '/assets/Products/Agriculture/apply10.png'
const applyImg11 = '/assets/Products/Agriculture/apply11.png'
const applyImg12 = '/assets/Products/Agriculture/apply12.png'

//style
import {
    TitleBar,
    SubImg,
    SubRowContainer,
} from '../../../styles/Products/Agriculture/style'

import {
    ImgSubTitle,
    ImgSubContent,
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


const Agriculture = () => {
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
        {
            src: applyImg6,
            alt: 'applyImg'
        },
        {
            src: applyImg7,
            alt: 'applyImg'
        },
        {
            src: applyImg8,
            alt: 'applyImg'
        },
        {
            src: applyImg9,
            alt: 'applyImg'
        },
        {
            src: applyImg10,
            alt: 'applyImg'
        },
        {
            src: applyImg11,
            alt: 'applyImg'
        },
        {
            src: applyImg12,
            alt: 'applyImg'
        }
    ];
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Products · 농업용수 FDA/MSF 여과기
                    <TitleMainText>
                        농업용수 FDA/MSF 여과기
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        농업용수 공급 프로세스
                    </SubLargeTitle>
                    <FullSubContent>
                        여름철 홍수기에는 탁도 증가와 녹조류 발생으로 인해 하천, 저수지, 강의 취수원수가 농업용수로 사용하기에 문제가 됩니다.
                        이러한 문제를 해결하기 위해 전기촉매 타워(ET)와 필터(MSF)를 이용하여 농업용수를 연중 안전하게 공급하고 있습니다.
                    </FullSubContent>
                    <ProcessBox>
                        <EmptyBox/>
                        <ImgDescription>
                            <ProcessImgs src={processImg1} alt="processImg" />
                            탁도 높은 물과 녹조류 발생
                            <EmptyDescription />
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <ProcessImgs src={processImg2} alt="processImg" />
                            녹조 제거 ET+ EF 혼용기술
                            <EmptyDescription />
                        </ImgDescription>
                        <ProcessArrow />
                        <ImgDescription>
                            <ProcessImgs src={processImg3} alt="processImg" />
                            안전하고 건강한 용수 공급
                            <GreyDescription>
                                (국내 최초 및 최대 실적 확보)
                            </GreyDescription>
                        </ImgDescription>
                    </ProcessBox>
                </SubColumnContainer>
                <SubRowContainer >
                    <ImgSubContent>
                        <ImgSubTitle>
                            원예 시설 단지
                        </ImgSubTitle>
                        BlueBS는 원예단지 시설에 최첨단 나노 살균수 기술을 도입함으로써, 식물 보호와 생산성 향상에 힘쓰고 있습니다.
                        나노 살균수는 미세한 나노 입자를 이용해 물을 살균하는 기술로, 화학적 방법에 비해 환경에 더 친화적이며 식물에도 안전합니다.
                    </ImgSubContent>
                    <SubImg
                        src={agriculture1}
                        alt="agriculture"
                        $width={'750px'}
                        $margin={'0 0 0 50px'}
                    />
                </SubRowContainer>
                <SubRowContainer style={{ flexDirection: 'row-reverse' }}>
                    <ImgSubContent>
                        <ImgSubTitle>
                            스마트 팜
                        </ImgSubTitle>
                        BlueBS는 첨단 정수 시스템을 통해 스마트팜에 공급되는 물을 정수하고, 이를 통해 농작물이 최적의 조건에서 성장할 수 있도록 지원합니다. 
                        스마트팜의 농업용수를 4계절 내내 안전하게 공급함으로써, 스마트팜이 지속 가능한 농업 실천을 할 수 있도록 돕습니다.
                    </ImgSubContent>
                    <SubImg
                        src={agriculture2}
                        alt="agriculture"
                        $width={'650px'}
                        $margin={'0 50px 0 0'}
                    />
                </SubRowContainer>
                <SubColumnContainer>
                    <SubTitle>
                        실제 적용 사례: 농업용수 공급
                    </SubTitle>
                    <Carousel imgJson={imgJson} />
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Agriculture;