import styled from "styled-components";

//img
const SewerPD = '/assets/Products/Sewer/SewerPD.png';

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${SewerPD});
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

export const ProcessImg = styled.img`
    margin-top: 35px;
     width: 100%;
`

export const ImgBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const ImgDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 20px;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 1600px) {
        width: 32%;
        font-size: 18px;
    }
    @media (max-width: 1000px) {
        font-size: 16px;
    }
    @media (max-width: 760px) {
        width: 45%;
    }
    @media (max-width: 600px) {
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
    @media (max-width: 1000px) {
        font-size: 14px;
    }
    @media (max-width: 600px) {
        font-size: 12px;
    }
`

export const Imgs = styled.img`
    width: 450px;
    margin-bottom: 5px;
    @media (max-width: 1600px) {
        width: 100%;
    }
`
