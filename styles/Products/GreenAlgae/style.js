import styled from "styled-components";

//img
const GreenAlgaePD = '/assets/Products/GreenAlgae/GreenAlgaePD.png';
const processArrow = '/assets/Products/Agriculture/processArrow.png';
const plus = '/assets/Products/GreenAlgae/plus.svg';

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${GreenAlgaePD});
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

export const CompareImgBox = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    @media (max-width: 1600px) {
        width: 90%;
    }
    @media (max-width: 1000px) {
        width: 100%;
    }
`

export const CompareDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 20px;
    align-items: center;
    @media (max-width: 1600px) {
        width: 50%;
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
        font-size: 12px;
    }
`
export const ProcessVideo = styled.video`
    width: 410px;
    height: 304px;
    margin-bottom: 5px;
    object-fit: cover;
    object-position: center center;
    @media (max-width: 1600px) {
        width: 100%;
        height: auto;
    }
`
export const CompareArrow = styled.img.attrs({
    src: processArrow,
    alt: 'processArrow'
})`
    width: 70px;
    height: 70px;
    margin: 0 20px 40px;
    @media (max-width: 1600px) {
        width: 5%;
        height: 5%;
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

export const CompareImgs = styled.img`
    width: 400px;
    margin-bottom: 5px;
    @media (max-width: 1600px) {
        width: 100%;
    }
`

export const ImgBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    @media (max-width: 1600px) {
        width: 90%;
    }
    @media (max-width: 1000px) {
        width: 100%;
    }
`

export const Imgs = styled.img`
    width: 650px;
    margin-bottom: 5px;
    @media (max-width: 1600px) {
        width: 100%;
    }
`

export const PlusImg = styled.img.attrs({
    src: plus,
    alt: 'plus'
})`
    width: 30px;
    height: 30px;
    margin: 0 20px 40px;
`