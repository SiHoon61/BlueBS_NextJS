import React from 'react';

//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    BodyTitle,
    EmptyHeight,
    RedText,
    GreenText,
    Body,
    PictureBox,
    Picture,
    NameBox,
    SignBox,
    SingImg,
} from './style'

const Greeting = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Company · CEO 인사말
                    <TitleMainText>
                        CEO 인사말
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <BodyTitle>
                    블루비에스는 수처리분야 <RedText>신개념 초격차 기술</RedText>을 확보한 환경 분야 최고 기업입니다.<br /><EmptyHeight/>
                    저희는 <GreenText>미래 환경을 위한</GreenText> 기술개발에 전력을 다하고 있습니다.
                </BodyTitle>
                <Body>
                    저희 블루비에스에 대한 따뜻한 관심에 깊은 감사의 말씀을 드립니다.<br /><br />

                    당사는 인류의 “환경개선& 기술융합”으로 삶의 질 향상과 환경을 생각하는 대표적인 환경전문기업으로 환경 글로벌 탑 신기술 개발과 농림축산식품과학기술 등 국가 환경산업발전에 최선의 노력을 다하고 있습니다.<br /><br />

                    또한 다양한 연구기관 및 대학과 함께 연구 네트워크를 구축하여 변화하는 환경에 맞추어 수질분야와 물 재이용분야에서 한걸음 앞선 기술을 선보이며 신기술, 특허, 녹색기술, 품질인증 등의 기술력을 확보하는 등 환경전문업체로 지속적 성장을 해나가고 있습니다.<br /><br />

                    항상 최상의 기술과 최선의 모습으로 최고를 지향하는 회사로 진정한 고객 감동을 실현하겠습니다.<br /><br />

                    많은 관심과 성원 부탁 드립니다.
                    <PictureBox>
                        <Picture />
                        <NameBox>
                            (주) 블루비에스 대표이사
                            <SignBox>
                                홍&nbsp;&nbsp;민
                                <SingImg />
                            </SignBox>
                        </NameBox>
                    </PictureBox>
                </Body>

            </MainContainer>
        </>
    );
};

export default Greeting;