import styled from "styled-components";

//img
const communication = '/assets/Communication/Communication.png';

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

export const SubContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    width: 85%;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 600px) {
        margin: 0 auto 50px auto;
        max-width: 90%;
    }
`

export const SubTitle = styled.div`
    margin-top: 10px;
    width: 1500px;
    font-size: 40px;
    font-family: var(--font-sansBold);
    margin-bottom: 35px;
`

export const NewsContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1%;
    justify-content: flex-start;
    @media (max-width: 1250px) {
        gap: 3%;
    }
    @media (max-width: 750px) {
        justify-content: center;
    }
`

export const MedianLine = styled.hr`
    margin-top: 0;
    margin-bottom: 100px;
    width: 100%;
    border: 5px solid #EFEFEF;
    @media (max-width: 600px) {
        margin-bottom: 50px;
    }
`