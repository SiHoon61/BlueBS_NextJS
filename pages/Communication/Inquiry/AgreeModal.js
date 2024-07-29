import React, { useRef } from 'react';
import styled, { keyframes } from "styled-components";

import close from '../../../assets/Business/close.png'

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
    background: rgba(0, 0, 0, 0.4);
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
    position: relative;
    background: white;
    padding: 60px 70px 70px 70px;
    height: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    animation: ${props => props.$show ? fadeIn : fadeOut} 0.2s forwards;
    @media (max-width: 1400px) {
        width: 70%;
    }
    @media (max-width: 600px) {
        width: 80%;
        padding: 40px 30px 50px 30px;
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
    font-size: 32px;
    font-family: var(--font-sansBold);
    margin-bottom: 20px;
    @media (max-width: 600px){
        font-size: 24px;
    }
`
const SubTitle = styled.div`
    word-break: keep-all;
    font-size: 26px;
    font-family: var(--font-sansMedium);
    @media (max-width: 930px) {
        font-size: 24px;
    }
    @media (max-width: 600px){
        font-size: 20px;
    }
`

const SmallSubTitle = styled.div`
    word-break: keep-all;
    font-size: 18px;
    font-family: var(--font-sansMedium);
    @media (max-width: 930px) {
        font-size: 16px;
    }
    @media (max-width: 600px){
        font-size: 14px;
    }
`
const Notification = styled.div`
    word-break: keep-all;
    font-size: 13px;
    margin-top: 5px;
    font-family: var(--font-sansRegular);
    @media (max-width: 930px) {
        font-size: 11px;
    }
`
const AgreeModal = ({ show, onClose }) => {
    const contentRef = useRef(null);
    const handleClickOutside = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            onClose(); // 클릭된 영역이 Content 밖이라면 모달 닫기 함수 호출
        }
    };
    return (
        <Modal onClick={handleClickOutside} $show={show}>
            <Content ref={contentRef} $show={show}>
                <CloseButton
                    src={close}
                    alt="close"
                    onClick={onClose}
                />
                <Title>개인정보 처리방침</Title>
                <SubTitle>개인정보의 수집 및 이용 동의</SubTitle>
                <SmallSubTitle>문의사항에 대한 답변을 위해 최소한의 개인정보만을 수집합니다.</SmallSubTitle>
                <Table />
                <Notification>※ 귀하는 개인정보 수집 및 이용에 관한 동의를 거부하실 수 있습니다. 다만, 동의 거부 시에는 관련 서비스 이용이 제한될 수 있습니다.</Notification>
            </Content>
        </Modal>
    );
};

const StyledTable = styled.table`
    word-break: keep-all;
    width: 100%;
    margin-top: 15px;
    font-size: 18px;
    border-collapse: collapse;
    font-family: var(--font-sansMedium);
`;

const R1TD = styled.td`
  font-size: 16px;
  border: 1px solid #E2E2E2;
  background-color: #E9E9E9;
  text-align: center;
  padding: 10px;
  @media (max-width: 930px) {
        font-size: 14px;
    }
  @media (max-width: 600px) {
      font-size: 12px;
      padding: 12px;
    }
`;

const TD = styled.td`
  font-size: 14px;
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 18px;
  @media (max-width: 930px) {
        font-size: 12px;
    }
  @media (max-width: 600px) {
      font-size: 10px;
      padding: 12px;
    }
`;


const Table = () => {
    return (
        <StyledTable>
            <tbody>
                <tr>
                    <R1TD>
                        수집 항목
                    </R1TD>
                    <R1TD>
                        수집 목적
                    </R1TD>
                    <R1TD>
                        보유 및 이용기간
                    </R1TD>
                </tr>
                <tr>
                    <TD>
                        이름, 연락처, 이메일
                    </TD>
                    <TD>
                        문의사항 접수/답변을 위한 정보 확인
                    </TD>
                    <TD>
                        수집일로부터 이용목적 달성 시까지
                    </TD>
                </tr>
            </tbody>
        </StyledTable>
    )
}


export default AgreeModal;