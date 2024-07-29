import styled from "styled-components";

//img
import AgriculturePD from '../../../assets/Products/Agriculture/AgriculturePD.png'
import processArrow from '../../../assets/Products/Agriculture/processArrow.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${AgriculturePD});
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

export const SubRowContainer = styled.div`
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 1500px;
    margin-bottom: 150px;
    @media (max-width: 1600px) {
        max-width: 80%;
        margin: 0 auto 100px auto;
    }
    @media (max-width: 1000px) {
        flex-direction: column !important;
    }
    @media (max-width: 600px) {
        max-width: 90%;
        margin-bottom: 50px;
    }
`

export const SubImgContainer = styled.div`
    margin: 50px auto 50px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const SubImgTitle = styled.div`
    margin: ${props => props.$margin};
    width: ${props => props.$width};
    font-size: 40px;
    font-family: var(--font-sansBold);
`

export const SubImgContent = styled.div`
    width: ${props => props.$width};
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px;
`

export const SubImg = styled.img`
    width: 45%;
    margin: ${props => props.$margin};
    @media (max-width: 1000px) {
        margin: 30px 0 0;
        width: 100%;
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
    @media (max-width: 1000px) {
        font-size: 16px;
    }
    @media (max-width: 780px) {
        font-size: 14px;
    }
    @media (max-width: 600px) {
        width: 45%;
        font-size: 12px;
    }
`

export const GreyDescription = styled.span`
    font-size: 18px;
    color: #313131;
    font-family: var(--font-sansRegular);
    @media (max-width: 1600px) {
        font-size: 16px;
    }
    @media (max-width: 1000px) {
        font-size: 14px;
    }
    @media (max-width: 780px) {
        font-size: 12px;
    }
    @media (max-width: 600px) {
        font-size: 10px;
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

