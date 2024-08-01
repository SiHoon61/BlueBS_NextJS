import styled from "styled-components";

//img
const company = '/assets/Company/company.png'
const onlyLogo = '/assets/Company/onlyLogo.png'
const line = '/assets/Company/line4.svg'

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
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
    overflow: hidden;
    @media (max-width: 600px) {
        margin-top: 40px;
    }
`

export const HistoryStart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 180px;
    max-width: 1800px;
    margin-bottom: 40px;
    @media (max-width: 600px) {
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-left: 15px;
        height: auto;
    }
`

export const LogoImg = styled.img.attrs({
    src: onlyLogo,
    alt: 'onlyLogo'
})`
    margin-right: 10px;
    width: 100px;
    @media (max-width: 1000px) {
        width: 60px;
        margin-right: 5px;
    }
    @media (max-width: 600px) {
        margin-left: 40px;
    }
`

export const BigYear = styled.div`
    font-family: var(--font-sansBold);
    font-size: 40px;
    margin: 20px;
    @media (max-width: 1000px) {
        font-size: 35px;
    }
`

export const Bigcontent = styled.div`
    font-family: var(--font-sansMedium);
    font-size: 20px;
    margin-top: 35px;
    line-height: 38px;
    @media (max-width: 1000px) {
        font-size: 18px;
    }
    @media (max-width: 600px) {
        font-size: 16px;
        margin-top: 0px;
        margin-left: 40px;
    }
`

export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 700px;
    max-width: 80%;
    @media (max-width: 1450px) {
        margin-left: 500px;
    }
    @media (max-width: 1300px) {
        margin-left: 0px;
    }
    @media (max-width: 600px) {
        max-width: 90%;
    }
`

export const MiddleHistoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 35px;
`

export const Year = styled.div`
    font-size: 40px;
    font-family: var(--font-sansBold);
    display: flex;
    @media (max-width: 1000px) {
        font-size: 32px;
    }
    @media (max-width: 600px) {
        flex-wrap: wrap;
        margin-left: 30px;
    }
`

export const Month = styled.div`
    font-family: var(--font-sansBold);
    font-size: 22px;
    margin-right: 30px;
    @media (max-width: 1000px) {
        font-size: 20px;
    }
    @media (max-width: 600px) {
        font-size: 20px;
    }
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    font-family: var(--font-sansMedium);
    font-size: 20px;
    margin-left: 160px;
    margin-bottom: 20px;
    @media (max-width: 1000px) {
        font-size: 18px;
        align-items: flex-start;
    }
     @media (max-width: 600px) {
        margin-left: 30px;
        font-size: 16px;
        line-height: 30px;
    }
`

export const LineImg = styled.img.attrs({
    src: line,
    alt: 'line'
})`
    margin-top: 20px;
    margin-left: 30px;
    height: 20px;
    @media (max-width: 1000px) {
        margin-top: 15px;
    }
    @media (max-width: 600px) {
        margin-left: -30px;
    }
`

export const ImgContainer = styled.div`
    color: #313131;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    position: absolute;
    margin-top: 50px;
    margin-right: 50px;
    top: ${props => props.$isTop}px;
    right: 53%;
    font-size: 32px;
    @media (max-width: 1450px) {
        width: 400px;
        right: 60%;
    }
    @media (max-width: 1300px) {
        display: none;
    }
`

export const ImgDescription = styled.div`
    font-size: 18px;
    font-family: var(--font-sansMedium);
`

export const HistoryImg = styled.img`
    margin: 10px;
    width: 600px;
    @media (max-width: 1450px) {
        width: 400px;
    }
`