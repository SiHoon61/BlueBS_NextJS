import styled from "styled-components";

//img
import company from '../../../assets/Company/company.png'
import hongmin from '../../../assets/Company/hongmin.jpg'
import sign from '../../../assets/Company/sign.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${company});
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
    padding-top: 230px;
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
    color: #313131;
    width: 100%;
    @media (max-width: 600px) {
        margin-top: 50px;
    }
`

export const BodyTitle = styled.div`
    max-width: 80%;
    width: 985px;
    font-size: 36px;
    margin: 0 auto;
    font-family: var(--font-sansBold);
    @media (max-width: 1000px) {
        font-size: 28px;
    }
    @media (max-width: 600px) {
        font-size: 26px;
        max-width: 90%;
    }
`
export const EmptyHeight = styled.div`
    height: 10px;
`

export const RedText = styled.span`
    color: #C50000;
`

export const GreenText = styled.span`
    color: #1E9500;
`

export const Body = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 80%;
    width: 985px;
    margin: 50px auto;
    font-size: 18px;
    line-height: 30px;
    @media (max-width: 600px) {
        margin: 30px auto;
        flex-direction: column;
        max-width: 90%;
        font-size: 16px;
    }
`

export const PictureBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const Picture = styled.img.attrs({
    src: hongmin,
    alt: 'HongMin'
})`
    width: 300px;
    margin-left: 50px;
    @media (max-width: 1000px) {
        width: 200px;
    }
    @media (max-width: 600px) {
        display: none;
    }
`

export const NameBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;
    margin-left: 50px;  
    font-size: 22px;
    font-family: var(--font-sansBold);
    @media (max-width: 1000px) {
        font-size: 18px;
        margin-left: 30px;
    }
    @media (max-width: 600px) {
        margin-top: 30px;
        margin-left: 0px;
        align-items: flex-start;
    }
`

export const SignBox = styled.div`
    margin-top: 10px;
    display: flex;
    font-size: 28px;
    font-family: var(--font-sansBold);
    align-items: center;
    @media (max-width: 1000px) {
        font-size: 22px;
    }
`

export const SingImg = styled.img.attrs({
    src: sign,
    alt: 'sign'
})`
    margin-left: 20px;
    margin-top: 3px;
    width: 170px;
    @media (max-width: 1000px) {
        width: 110px;
    }
`