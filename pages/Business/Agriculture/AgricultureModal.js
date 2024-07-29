import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from "styled-components";

//img
import close from '../../../assets/Business/close.svg'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Modal = styled.div`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${props => props.$show ? fadeIn : fadeOut} 0.3s forwards;
`
const Content = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 6px;
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #A4A4A4;
    }
    position: relative;
    background: white;
    padding: 60px 70px 70px 70px;
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${props => props.$show ? fadeIn : fadeOut} 0.2s forwards;
    max-height: 60%;
    @media (max-width: 1230px) {
        width: 70%;
        max-height: 60%;
    }
    @media (max-width: 600px) {
        width: 80%;
        padding: 40px 30px 50px 30px;
        max-height: 65%;
        margin-top: 50px;
    }
`

const CloseButton = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

const Title = styled.div`
    font-size: 30px;
    font-family: var(--font-sansBold);
    @media (max-width: 600px){
        font-size: 24px;
    }
`
const AgricultureModal = ({ show, onClose }) => {
    const contentRef = useRef(null);
    const handleClickOutside = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            onClose(); // 클릭된 영역이 Content 밖이라면 모달 닫기 함수 호출
        }
    };
    return (
        <>
            <Modal onClick={handleClickOutside} $show={show}>
                <Content ref={contentRef} $show={show}>
                    <CloseButton
                        src={close}
                        alt="close"
                        onClick={onClose}
                    />
                    <Title>
                        주요실적
                    </Title>
                    <Table />
                </Content>
            </Modal>
        </>
    );
};

const StyledTable = styled.table`
    width: 90%;
    margin-top: 25px;
    font-size: 18px;
    border-collapse: collapse;
    font-family: var(--font-sansMedium);
    @media (max-width: 1400px) {
        font-size: 16px;
    }
    @media (max-width: 1000px) {
        font-size: 14px;
    }
    @media (max-width: 600px) {
       font-size: 12px;
    }
`;

const TR = styled.tr``;

const baseCellStyle = css`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: left;
    padding: 18px 30px;
    font-family: var(--font-sansMedium);
    height: 40px;
    @media (max-width: 1230px) {
        padding: 14px 20px;
    }
`;

const TD = styled.td`
    font-size: ${props => props.$size};
    ${baseCellStyle}
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
    @media (max-width: 600px) {
        display: none;
    }
`;

const RSTD = styled.td`
    font-size: ${props => props.$size};
    ${baseCellStyle}
    border-top: 2px solid black;
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
    @media (max-width: 600px) {
        display: none;
    }
`;

const RFTD = styled.td`
    font-size: ${props => props.$size};
    ${baseCellStyle}
    border-bottom: 2px solid black;
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
    @media (max-width: 600px) {
        display: none;
    }
`;

export const DescriptionStyle = styled.span`
    margin-right: 10px;
    font-family: var(--font-sansBold);
    @media (max-width: 1400px) {
        display: block;
    }
    @media (max-width: 600px) {
        display: inline;
    }
`

export const MobileTD = styled.td`
    display: none;
    line-height: 20px;
    ${baseCellStyle}
    border-top: ${props => props.$border};
    &:first-child {
        border-left: none;
    }
    &:last-child {
        border-right: none;
    }
    @media (max-width: 600px) {
        display: table-cell;
    }
`

const Table = () => {
    const [returnValue, setReturnValue] = useState('');

    useEffect(() => {
        document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
        const updateValue = () => {
            if (window.innerWidth > 1600) {
                setReturnValue('20px');
            } else if (window.innerWidth > 1000) {
                setReturnValue('18px');
            } else if (window.innerWidth > 600) {
                setReturnValue('16px');
            } else {
                setReturnValue('14px');
            }
        };
        updateValue();
        window.addEventListener('resize', updateValue);

        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
            window.removeEventListener('resize', updateValue);
        };
    }, []);
    return (
        <>
            <StyledTable>
                <tbody>
                    <TR>
                        <RSTD $size={returnValue}>한국농어촌공사
                            대구 하우스 시설 단지</RSTD>
                        <RSTD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            500m3/d
                        </RSTD>
                        <RSTD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </RSTD>
                        <MobileTD
                            style={{ borderTop: '2px solid black' }}>
                            한국농어촌공사
                            대구 하우스 시설 단지<br />
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            500m3/d
                        <br/>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </MobileTD>
                    </TR>
                    <TR>
                        <TD $size={returnValue}>경북대학교
                            대구 하우스 시설 단지 </TD>
                        <TD >
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            300m3/d
                        </TD>
                        <TD >
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </TD>
                        <MobileTD>
                            경북대학교
                            대구 하우스 시설 단지<br />
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            300m3/d
                            <br/>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </MobileTD>
                    </TR>
                    <TR>
                        <TD $size={returnValue}>김해시
                            김해시 화목가압장 농업용수 공급 여과기</TD>
                        <TD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            5,000m3/d
                        </TD>
                        <TD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </TD>
                        <MobileTD>
                            김해시
                            김해시 화목가압장 농업용수 공급 여과기<br />
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            5,000m3/d
                            <br/>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </MobileTD>
                    </TR>
                    <TR>
                        <TD $size={returnValue}>새만금 사업단
                            김제시 새만금농생명용지 5공구 공급 여과기
                        </TD>
                        <TD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            3,000m3/d
                        </TD>
                        <TD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </TD>
                        <MobileTD>
                            새만금 사업단
                            김제시 새만금농생명용지 5공구 공급 여과기<br />
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            3,000m3/d
                            <br/>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            FDA/MSF
                        </MobileTD>
                    </TR>
                    <TR>
                        <RFTD $size={returnValue}>김해시
                            하천수 농업용수 공급 안양 양수장
                        </RFTD>
                        <RFTD>
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            5,000m3/d
                        </RFTD>
                        <RFTD>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매 + MSF
                        </RFTD>
                        <MobileTD style={{ borderBottom: '2px solid black' }}>
                            김해시
                            하천수 농업용수 공급 안양 양수장<br />
                            <DescriptionStyle>
                                용량
                            </DescriptionStyle>
                            5,000m3/d
                            <br/>
                            <DescriptionStyle>
                                공정
                            </DescriptionStyle>
                            전기촉매 + MSF
                        </MobileTD>
                    </TR>
                </tbody>
            </StyledTable>
        </>
    );
};

export default AgricultureModal;