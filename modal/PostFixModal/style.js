import styled, { css, keyframes } from "styled-components";


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

export const Modal = styled.div`
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
export const Content = styled.div`
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
    width: 6px;
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #A4A4A4;
    }
    width: 1350px;
    position: relative;
    background: white;
    padding: 30px 40px 40px 40px;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${props => props.$show ? fadeIn : fadeOut} 0.2s forwards;
`

export const CloseButton = styled.img`
    width: 40px;
    height: 40px;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

export const Date = styled.div`
    font-size: 16px;
    color: #717171;
    width: 100%;
    margin-top: 15px;
`


export const Title = styled.div`
    display: flex;
    font-size: 30px;
    font-family: var(--font-sansBold);
    margin: 30px auto 50px;
`

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
`

export const InquiryForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 75%;
    justify-content: space-between;
    margin: 0 auto 30px; 
    font-size: 20px;
    font-family: var(--font-sansBold);  
`

export const InquiryInputForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 75%;
    margin: 0 auto 30px; 
    font-size: 20px;
    font-family: var(--font-sansBold);  
`

export const KeyText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-family: var(--font-sansBold);  
    width: 100px;  
`

export const InputBox = styled.input`
    display: flex;
    align-items: center;
    padding-left: 15px;
    border: 1.5px solid grey;
    width: 800px;
    height: 50px;
    font-size: 16px;
`

export const BodyTextarea = styled.textarea`
    resize: none;
    width: 800px;
    height: 200px;
    border: 1.5px solid grey;
    padding: 10px;
    font-size: 16px;
`

export const Submit = styled.div`
    margin: 10px auto 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    width: 220px;
    height: 50px;
    background-color: #0052A7;
    cursor: pointer;
    font-family: var(--font-sansMedium); 
`

export const InputText = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    font-family: var(--font-sansBold);  
    width: 150px;  
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50%;
`

export const FileText = styled.div`
    max-width: 320px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const ExistImg = styled.img`
    width: 200px;
    margin-left: 20px;
    height: auto;
`

export const DeleteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    width: 110px;
    height: 22px;
    font-size: 14px;
    background-color: #EEEEEE;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 3px;
    font-family: var(--font-sansRegular); 
    &:hover{
        filter: brightness(90%);
    }
    transition: filter 0.1s;
`