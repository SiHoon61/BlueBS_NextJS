import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from "styled-components";

//img
const close = '/assets/Business/close.svg';

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
    width: 1000px;
    position: relative;
    background: white;
    padding: 60px 70px 70px 70px;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${props => props.$show ? fadeIn : fadeOut} 0.2s forwards;
    max-height: 70%;
    @media (max-width: 1230px) {
        padding: 60px 70px 70px 70px;
        width: 70%;
        max-height: 60%;
        margin-top: 6%;
    }
    @media (max-width: 600px) {
        width: 80%;
        padding: 60px 30px 50px 30px;
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
    width: 100%;
    margin-top: 30px;
    font-size: 38px;
    font-family: var(--font-sansBold);
    @media (max-width: 600px) {
        font-size: 24px;
        margin-top: 15px;
    }
`

const Date = styled.div`
    font-size: 16px;
    color: #717171;
    width: 100%;
    margin-top: 15px;
`

const NewsImg = styled.img`
    margin-top: 35px;
    width: 85%;
    height: auto;
`

const NewsBody = styled.div`
    width: 100%;
    margin-top: 35px;
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 40px;
    @media (max-width: 600px) {
        font-size: 16px;
        line-height: 35px;
        margin-bottom: 15px;
    }
`

const HR = styled.hr`
    width: 100%;
    height: 2px;
    background-color: black;
`

const NewsModal = ({ show, onClose, content }) => {
    const contentRef = useRef(null);
    const handleClickOutside = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            onClose(); // 클릭된 영역이 Content 밖이라면 모달 닫기 함수 호출
        }
    };
    useEffect(() => {
        document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;

        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };

    }, []);
    return (
        <>
            <Modal onClick={handleClickOutside} $show={show}>
                <Content ref={contentRef} $show={show}>
                    <CloseButton
                        src={close}
                        alt="close"
                        onClick={onClose}
                    />
                    <HR />
                    <Title>
                        {content.title}
                    </Title>
                    <Date>
                        {content.date}
                    </Date>
                    <NewsImg src={content.src} alt="newsImg" />
                    <NewsBody>
                        {content.body}
                    </NewsBody>
                    <HR />
                </Content>
            </Modal>
        </>
    );
};

export default NewsModal;
