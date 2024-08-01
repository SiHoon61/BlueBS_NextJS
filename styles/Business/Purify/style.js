import styled from "styled-components";

const purify = '/assets/Business/Purify/purify.png'
const purifyBody = '/assets/Business/Purify/purifyBody.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${purify});
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

export const SubLargeTitle = styled.div`
    margin-top: 10px;
    width: 1500px;
    font-size: 48px;
    font-family: var(--font-sansBold);
`

export const FullSubContent = styled.div`
    width: 1500px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px; 
`

export const BodyImg = styled.div`
    display: flex;
    height: 700px;
    width: 100%;
    background-image: url(${purifyBody});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: 150px;
    @media (max-width: 1600px) {
        margin-bottom: 100px;
        height: 500px;
    }
    @media (max-width: 600px) {
        margin-bottom: 50px;
        height: 400px;
    }
`

export const PerformanceVideo = styled.video`
    width: 100%;
`



