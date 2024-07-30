import styled from "styled-components";

//img
const AISmartWater = '/assets/Products/AIWaterSystem/AISmartWater.png';

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${AISmartWater});
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
        width: 100%;
        font-size: 14px;
        margin-bottom: 15px;
    }
`

export const BodyImg = styled.div`
    display: flex;
    height: 700px;
    width: 100%;
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: 150px;
`

export const FullImg = styled.img`
    margin-top: 35px;
    width: 100%;
`

export const ImgBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-wrap: wrap;
    }
`

export const Imgs = styled.img`
    width: 450px;
    margin-bottom: 5px;
    @media (max-width: 1600px) {
        width: 100%;
    }
`

export const DevelopDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 20px;
    align-items: center;
    margin: 0 15px;
    @media (max-width: 1600px) {
        font-size: 18px;
    }
    @media (max-width: 1050px) {
        font-size: 16px;
    }
    @media (max-width: 930px) {
        font-size: 14px;
        margin: 0 10px;
    }
    @media (max-width: 820px) {
        font-size: 12px;
         margin: 0 5px;
    }
    @media (max-width: 700px) {
        font-size: 10px;
    }
    @media (max-width: 600px) {
        width: 100%;
        font-size: 14px;
        margin-bottom: 15px;
    }
`

export const DifferentImgs = styled.img`
    max-width: 100%;
    height: auto;
    margin-bottom: 5px;
    @media (max-width: 600px) {
        width: 100%;
    }
`