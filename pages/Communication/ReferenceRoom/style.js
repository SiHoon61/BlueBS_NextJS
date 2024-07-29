import styled from "styled-components";

//img
import communication from '../../../assets/Communication/Communication.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${communication});
    background-color: rgba(36, 36, 36, 0.40);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    @media (max-width: 1000px) {
        height: 450px;
    }
    @media (max-width: 600px) {
        height: 350px;
    }
`

export const TitleTextBox = styled.div`
    padding-top: 200px;
    vertical-align: baseline;
    width: 90%;
    max-width: 1400px;
    margin: 0 auto;
    color: white;
    font-size: 14px;
    font-family: var(--font-sansRegular);
    @media (max-width: 600px) {
        padding-top: 200px;
    }
`

export const TitleMainText = styled.div`
    font-size: 96px;
    font-family: var(--font-sansBold);
    @media (max-width: 1000px) {
        font-size: 72px;
    }
    @media (max-width: 600px) {
        font-size: 48px;
    }
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
    overflow-x: hidden;
    @media (max-width: 600px) {
        margin-top: 50px;
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
export const AttachedFile = styled.a`
    margin-left: 15px;
    font-family: var(--font-sansRegular);
    text-decoration-line: none;
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

export const NavigateText = styled.div`
    margin-left: 30px;
    font-family: var(--font-sansRegular);
    cursor: pointer;
`

export const NullText = styled.div`
    margin-left: 30px;
    font-family: var(--font-sansRegular);
    color: grey;
`