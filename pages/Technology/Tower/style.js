import styled from "styled-components";
import tower from '../../../assets/Technology/tower.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${tower});
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
        padding-top: 170px;
    }
`
export const TitleSubText = styled.div`
    font-size: 48px;
    font-family: var(--font-sansBold);
    color: #FEE824;
    margin-bottom: -15px;
    @media (max-width: 1000px) {
        font-size: 36px;
    }
    @media (max-width: 600px) {
        margin-bottom: -5px;
        font-size: 24px;
    }
`

export const TitleMainText = styled.div`
    font-size: 96px;
    font-family: var(--font-sansBold);
    @media (max-width: 1000px) {
        font-size: 72px;
    }
    @media (max-width: 600px) {
        font-size: 40px;
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

export const SubRowContainer = styled.div`
    align-items: flex-start;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 1100px;
    justify-content: space-between;
    margin-top: 35px;
    @media (max-width: 1300px) {
        width: 800px;
    }
    @media (max-width: 1000px) {
        width: 600px;
    }
    @media (max-width: 750px) {
        width: 500px;
    }
    @media (max-width: 600px) {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
    }
    
`

export const TowerVideo = styled.video`
    width: 100%;
`

export const SeparationVideoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansMedium);
    @media (max-width: 1000px) {
        font-size: 18px;
    }
    @media (max-width: 600px) {
        margin-bottom: 20px;
    }
`

export const SeparationVideo = styled.video`
    width: 500px;
    height: 500px;
    border-radius: 5px;
    object-fit: cover;
    object-position: center top;
    margin-bottom: 5px;
    @media (max-width: 1300px) {
        width: 350px;
        height: 350px;
    }
    @media (max-width: 1000px) {
        width: 250px;
        height: 250px;
    }
    @media (max-width: 750px) {
        width: 200px;
        height: 200px;
    }
    @media (max-width: 600px) {
        width: 340px;
        height: 340px;
    }
`