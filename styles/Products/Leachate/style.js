import styled from "styled-components";

//img
const LeachatePD = '/assets/Products/Leachate/LeachatePD.png';
const processArrow = '/assets/Products/Agriculture/processArrow.png';

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${LeachatePD});
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

export const ImgBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 35px auto 0;
    align-items: center;
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

export const SolutionDescription = styled.div`
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

export const GreyDescription = styled.span`
    font-size: 18px;
    color: #313131;
    font-family: var(--font-sansRegular);
`

export const EmptyDescription = styled.div`
    height: 26px;
    width: 26px;
`

export const ProcessArrow = styled.img.attrs({
    src: processArrow,
    alt: 'processArrow'
})`
    width: 70px;
    height: 70px;
    margin-bottom: 40px;
`
