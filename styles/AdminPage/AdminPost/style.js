import styled from "styled-components";

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
    margin: auto;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
    font-size: 20px;
    font-family: var(--font-sansBold);  
`

export const KeyText = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: var(--font-sansBold);  
    width: 130px;  
    margin-right: 50px;
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
    margin: 10px auto 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: white;
    width: 280px;
    height: 60px;
    cursor: pointer;
    background-color: #0052A7;
`

export const RedText = styled.span`
    color: #FA6E60;
`

export const MedianLine = styled.hr`
    margin-top: 0;
    margin-bottom: 50px;
    width: 100%;
    
    border: 5px solid #EFEFEF;
`

export const DataBox = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 400px;
    width: 450px;
    border-radius: 10px;
    margin-bottom: 50px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 0 auto 50px;
    &:hover{
        filter: brightness(70%);
    }
    transition: filter 0.3s;
`


export const DataImgs = styled.img`
    width: 100%;
    height: 75%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`

export const DataTitle = styled.div`
    margin: 10px 10px 30px 10px;
    height: 40px;
    font-size: 18px;
    font-family: var(--font-sansMedium);
    @media (max-width: 1450px) {
        font-size: 16px;
    }
    @media (max-width: 1000px) {
        font-size: 14px;
    }
`

export const DataDate = styled.div`
    position: absolute;
    color: #717171;
    font-size: 14px;
    bottom: 10px;
    left: 10px;
    @media (max-width: 1250px) {
        margin-top: 25px;
    }
`


export const BodyContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1600px) {
        max-width: 80%;
        margin: 0 auto 100px auto;
    }
    @media (max-width: 600px) {
        margin: 0 auto 50px auto;
        max-width: 90%;
    }
`

export const BodyHr = styled.hr`

    width: 100%;
    border: 0;
    height: 1px;
    background-color: black;
    /* @media (max-width: 600px) {
        margin-bottom: 50px;
    } */
`

export const TopTitle = styled.div`
    font-size: 32px;
    font-family: var(--font-sansMedium);
    padding: 30px 0 30px 25px;

`

export const TopSubTitle = styled.div`
    margin-top: 25px;
    font-size: 16px;
    font-family: var(--font-sansMedium);
`

export const GreyTitle = styled.span`
    margin: 0 50px 0 15px;
    color: #5a5a5a;
    font-size: 16px;
    font-family: var(--font-sansRegular);
`

export const BottomHr = styled.hr`

    width: 100%;
    border: 0;
    height: 1px;
    background-color: #a3a3a3;
`

export const BodyText = styled.div`
    font-size: 18px;
    font-family: var(--font-sansRegular);
    padding: 20px;
    padding-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    box-sizing: border-box;
    min-height: 300px;
`

export const AttachedBox = styled.div`
    width: 100%;
    height: 40px;
    background-color: #F0F0F0;
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    font-family: var(--font-sansMedium);
`
export const AttachedFile = styled.div`
    margin-left: 15px;
    font-family: var(--font-sansRegular);
`

export const NavigateBox = styled.div`
    width: 100%;
`

export const NavigateButton = styled.div`
    height: 30px;
    padding-left: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-family: var(--font-sansMedium);
`

export const NullText = styled.div`
    margin-left: 30px;
    font-family: var(--font-sansRegular);
    color: grey;
`