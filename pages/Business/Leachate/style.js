import styled from "styled-components";

//img
import leachate from '../../../assets/Business/Leachate/Leachate.png'
import leachateBody from '../../../assets/Business/Leachate/LeachateBody.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-image: url(${leachate});
    background-blend-mode: multiply;
    background-color: rgba(36, 36, 36, 0.4);
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

export const BodyImg = styled.div`
    display: flex;
    height: 700px;
    width: 100%;
    background-image: url(${leachateBody});
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

export const PerformanceImg = styled.img`
    width: 100%;
`