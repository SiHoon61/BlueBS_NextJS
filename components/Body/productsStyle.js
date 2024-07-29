import styled from "styled-components";
import processArrow from '../../assets/Products/Agriculture/processArrow.png'

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
    @media (max-width: 1400px) {
        font-size: 78px;
    }
    @media (max-width: 1000px) {
        font-size: 64px;
    }
    @media (max-width: 600px) {
        font-size: 32px;
    }
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
    @media (max-width: 600px) {
        margin-top: 40px;
    }
`

export const ProcessBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 35px;
    align-items: center;
    @media (max-width: 600px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const ProcessImgs = styled.img`
    width: 410px;
    margin-bottom: 5px;
    @media (max-width: 1600px) {
        width: 100%;
    }
`

export const ProcessArrow = styled.img.attrs({
    src: processArrow,
    alt: 'processArrow'
})`
    width: 70px;
    height: 70px;
    margin-bottom: 40px;
    @media (max-width: 1600px) {
        width: 4%;
        height: 4%;
    }
    @media (max-width: 1000px) {
        width: 3%;
        height: 3%;
    }
    @media (max-width: 600px) {
        width: 6%;
        height: 6%;
        margin: 0 5px 40px;
    }
`
export const EmptyBox = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: flex;
        width: 7%;
    }
`

export const ImgDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 20px;
    align-items: center;
    @media (max-width: 1600px) {
        width: 30%;
        font-size: 18px;
    }
    @media (max-width: 1050px) {
        font-size: 16px;
    }
    @media (max-width: 930px) {
        font-size: 14px;
    }
    @media (max-width: 820px) {
        font-size: 12px;
    }
    @media (max-width: 700px) {
        font-size: 10px;
    }
    @media (max-width: 600px) {
        width: 45%;
        font-size: 14px;
    }
`

export const GreyDescription = styled.span`
    font-size: 18px;
    color: #313131;
    font-family: var(--font-sansRegular);
    @media (max-width: 1600px) {
        font-size: 16px;
    }
    @media (max-width: 1050px) {
        font-size: 14px;
    }
    @media (max-width: 930px) {
        font-size: 12px;
    }
    @media (max-width: 820px) {
        font-size: 10px;
    }
    @media (max-width: 700px) {
        font-size: 8px;
    }
    @media (max-width: 600px) {
        font-size: 12px;
    }

`

export const EmptyDescription = styled.div`
    height: 26px;
    width: 26px;
    @media (max-width: 1600px) {
        height: 24px;
    }
    @media (max-width: 1000px) {
        height: 22px;
    }
    @media (max-width: 780px) {
        height: 20px;
    }
    @media (max-width: 780px) {
        height: 18px;
    }
`

