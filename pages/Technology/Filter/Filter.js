import React from 'react';

//video
import filterVideo from '../../../assets/Technology/filterVideo.mp4'

//style
import {
    TitleBar,
    TitleTextBox,
    TitleSubText,
    TitleMainText,
    MainContainer,
    SubRowContainer,
    MSFImg,
    FilterVideo,
    BoldStyle,
    MSFFeatureImg,
    ContentLi
} from './style'
import {
    SubLargeTitle,
    SubColumnContainer,
    FullSubContent,
    SubTitle,
    ImgSubTitle,
    ImgSubContent,
} from '../../../components/Body/bodyStyle'

//table
import ComparisonTable from './ComparisonTable';

const Filter = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Technology · 마이크로 여과필터
                    <TitleSubText>
                        무약품 세정
                    </TitleSubText>
                    <TitleMainText>
                        마이크로 여과필터
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <SubLargeTitle>
                        마이크로 여과필터(Micro Sustain steel Filter)
                    </SubLargeTitle>
                    <FullSubContent>
                        기계식 필터는 여과와 역세 기능을 동시자동으로 운전되는 여과 필터 (MSF)기술입니다.
                        MSF 여과 필터는 집약적이고 전력 소비가 낮으며, 역세 혹은 세정시 약품을 사용하지 않아 2차 오염원 발생이 없습니다.
                    </FullSubContent>
                    <FilterVideo muted autoPlay loop playsInline>
                        <source src={filterVideo} type="video/mp4" />
                    </FilterVideo>
                </SubColumnContainer>
                <SubRowContainer>
                    <ImgSubContent>
                        <ImgSubTitle>
                            마이크로 여과필터의 우수성
                        </ImgSubTitle>
                        기존 섬유형 필터 여과장치는 쉽게 찢어지고, 약품 세척이 필요하며 유지관리가 복잡합니다.<br />
                        이에 대응하여, 고객의 요구를 만족시키기 위해 개발된 스테인리스 스틸 마이크로 여과장치는 세척과 여과를 동시에 진행할 수 있으며, 찢어짐 없이 유지보수가 용이합니다.
                    </ImgSubContent>
                    <MSFImg />
                </SubRowContainer>
                <SubColumnContainer>
                    <SubTitle>
                        무약품 마이크로 여과필터 (MSF)의 작동원리 및 특징
                    </SubTitle>
                    <FullSubContent style={{ display: 'inline-block' }}>
                        <BoldStyle>한 개의 여과통에서 여과와 세척이 동시에 이루어지는 시스템</BoldStyle>으로 유지관리가 간편하며, 겨울철 운전정지, 여름철 고탁도와 각종 쓰레기, 녹조류, 파울링에 대한 문제가 없습니다.<br />
                        전기화학적 탄소 전극을 사용한 친환경 촉매 필터 기술과 기계식 FDA/MSF 여과기를 통해 지구와 인류에게 맑고 깨끗한 물을 공급합니다.
                    </FullSubContent>
                    <MSFFeatureImg />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        차별성 및 우수성
                    </SubTitle>
                    <FullSubContent>
                        기존 섬유형 여과와 달리 화약약품과 응집제 등을 사용하지 않습니다.
                    </FullSubContent>
                    <ComparisonTable />
                </SubColumnContainer>
                <SubColumnContainer>
                    <SubTitle>
                        농업분야 여과기 적합성
                    </SubTitle>
                    <FullSubContent>
                        <ul>
                            <ContentLi>
                                섬유형(Fiber) 여과필터는 상시 관리가 가능한 하수처리장에 적합하나, 변동성이 큰 하천이나 강에는 부적합합니다.
                            </ContentLi>
                            <ContentLi>
                                하천수, 강, 저수지와 같은 수원에서는 여름철 높은 탁도와 다양한 오염물질이 유입되며, 이로 인해 섬유형 필터가 쉽게 막히거나 찢어질 수 있습니다.
                            </ContentLi>
                            <ContentLi>
                                동절기에 여과 필터 운영을 중지하면 섬유포가 얼 수 있고, 여름철 운영 중단 시에는 섬유포 표면에 이끼와 바이오 파울링이 발생하여 유지관리가 어려워집니다.
                            </ContentLi>
                            <ContentLi>
                                이물질 제거를 위한 전처리 침전조에 약품을 과도하게 사용하면, 상당한 유지비용이 발생합니다.
                            </ContentLi>
                        </ul>
                    </FullSubContent>
                </SubColumnContainer>
            </MainContainer>
        </>
    );
};

export default Filter;