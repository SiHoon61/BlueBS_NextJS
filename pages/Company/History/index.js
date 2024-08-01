import React from 'react';

//img
const img2007 = '/assets/Company/img2007.png'
const img2011 = '/assets/Company/img2011.png'
const img2016 = '/assets/Company/img2016.png'
const img2023 = '/assets/Company/img2023.png'

import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    HistoryStart,
    LogoImg,
    BigYear,
    Year,
    LineImg,
    Bigcontent,
    Month,
    Content,
    MiddleContainer,
    MiddleHistoryContainer,
    ImgContainer,
    HistoryImg,
    ImgDescription,
} from '../../../styles/Company/History/style'

const History = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Company · 연혁
                    <TitleMainText>
                        연혁
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <HistoryStart>
                    <LogoImg />
                    <BigYear>
                        2007. 08
                    </BigYear>
                    <Bigcontent>
                        (주) 블루인바이로먼트엔텍 설립<br />
                        농림부 프로젝트 참여기업 (ARPC 농업기술센터)
                    </Bigcontent>
                </HistoryStart>
                <MiddleContainer>
                    <ImgContainer $isTop={760}>
                        <HistoryImg src={img2007} alt="2007" />
                        <ImgDescription>
                            블루비에스 본사 수원 서울대학교 농생명과학 벤처
                        </ImgDescription>
                    </ImgContainer>
                    <ImgContainer $isTop={1600}>
                        <HistoryImg src={img2011} alt="2011" />
                        <ImgDescription>
                            농림축산식품부 2013 생명산업대전 수상
                        </ImgDescription>
                    </ImgContainer>
                    <ImgContainer $isTop={2400}>
                        <HistoryImg src={img2016} alt="2016" />
                        <ImgDescription>
                            새만금 5공구 FDA(MSF)마이크로 여과 농업용수
                        </ImgDescription>
                    </ImgContainer>
                    <ImgContainer $isTop={3200}>
                        <HistoryImg src={img2023} alt="2023" />
                        <ImgDescription>
                            2023년 농림수산식품과학기술대전 장관상 수상
                        </ImgDescription>
                    </ImgContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2008
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            재단법인 서울대학교 산학협력재단 기술이전 계약체결
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            농업과학기술개발공동연구사업 서울대학교 산학협력단장 협약서 체결
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2009
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                09
                            </Month>
                            벤처기업인증
                        </Content>
                        <Content>
                            <Month>
                                12
                            </Month>
                            기업부설연구소 인증
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2010
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            녹색경영대상 수상
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2011
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                01
                            </Month>
                            녹색기술인증 (제 GT-11-00001호)
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            환경부장관 표창장 수상
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            녹색전문기업 확인
                        </Content>
                        <Content>
                            <Month>
                                08
                            </Month>
                            글로벌탑 환경기술개발사업 프로젝트 수행
                        </Content>
                        <Content>
                            <Month>
                                09
                            </Month>
                            농림기술개발 생명산업기술개발사업 프로젝트
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2012
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                09
                            </Month>
                            주)블루비에스 상호 변경
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2013
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                09
                            </Month>
                            제 16회 농림축산식품과학기술대상 표창
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2014
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            농어촌공사 성과공유제 체결
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            농어촌연구원 이동식 차량 녹조 시스템 프로젝트 수행
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2015
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            농어촌연구원 저수지 수질 개선위한 녹조선 시스템 개발 MOU 체결
                        </Content>
                        <Content>
                            <Month>
                                08
                            </Month>
                            한국과학기술원, 건설기술연구원 낙동강 녹조 제거 기술 협약
                        </Content>
                        <Content>
                            <Month>
                                10
                            </Month>
                            2015 WEFTEC 전시참여 (미국시카고)
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2016
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                02
                            </Month>
                            한국건설기술연구원 정수장 전처리 시스템 개발 및 상용화
                        </Content>
                        <Content>
                            <Month>
                                03
                            </Month>
                            농림부, 농어촌공사, KT 공동 (방글라데시 농업담수화 시스템 모니터링)
                        </Content>
                        <Content>
                            <Month>
                                06
                            </Month>
                            한국농어촌연구원 가뭄대비 차량용 기수담수화시스템 연구용역 및 실증
                        </Content>
                        <Content>
                            <Month>
                                10
                            </Month>
                            녹색기술인증(제GT-16-00123호)
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2017
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                04
                            </Month>
                            물 4차산업혁명 국회의정 발표 (가뭄대비 고도수처리 기술)
                        </Content>
                        <Content>
                            <Month>
                                12
                            </Month>
                            2017년 제주도 하수도 연찬회 (재이용 담수화 적용 사례)
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2018
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                04
                            </Month>
                            정수장 전처리 녹조제거 시연회 (과학기술부)
                        </Content>
                        <Content>
                            <Month>
                                12
                            </Month>
                            인도네시아 공업용수 공급 FS 기술계약
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2019
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                05
                            </Month>
                            한국건설기술연구원 패밀리 기업 협약
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2020
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                01
                            </Month>
                            녹색기술 인증 (초고속 고액분리 장치를 이용한 재이용 기술)
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2021
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                09
                            </Month>
                            환경산업기술원 산업화 지원화(EF 기반의 물재이용기술)프로젝트 수행
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2022
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                10
                            </Month>
                            혁신제품 조달청 등록
                        </Content>
                        <Content>
                            <Month>
                                10
                            </Month>
                            SK에코플랜트 공동 기술 개발 협약
                        </Content>
                        <Content>
                            <Month>
                                12
                            </Month>
                            농림식품 NET 신기술 등록
                        </Content>
                    </MiddleHistoryContainer>
                    <MiddleHistoryContainer>
                        <Year>
                            2023
                            <LineImg />
                        </Year>
                        <Content>
                            <Month>
                                01
                            </Month>
                            녹색기술 인증
                        </Content>
                        <Content>
                            <Month>
                                04
                            </Month>
                            한국농어촌공사 KRC 신기술 등록
                        </Content>
                        <Content>
                            <Month>
                                11
                            </Month>
                            농림축산식품과학기술대상 표창
                        </Content>
                    </MiddleHistoryContainer>
                </MiddleContainer>
            </MainContainer>
        </>
    );
};

export default History;