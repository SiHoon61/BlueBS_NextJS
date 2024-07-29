import styled from "styled-components";

//img
import agriculture from '../../../assets/Business/Agriculture/agriculture.png'
import agricultureBody from '../../../assets/Business/Agriculture/agricultureBody.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${agriculture});
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

export const BodyImg = styled.div`
    display: flex;
    height: 700px;
    width: 100%;
    background-image: url(${agricultureBody});
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

export const SubRowContainer = styled.div`
    align-items: center;
    margin: 0 auto;
    display: flex;
    width: 1500px;
    flex-direction: row;
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

export const AgricultureImg = styled.img`
    width: 500px;
    margin: ${props => props.$margin};
    @media (max-width: 1520px) {
        width: 400px;
    }
    @media (max-width: 1200px) {
        width: 320px;
    }
    @media (max-width: 1000px) {
        margin: 30px 0 0;
        width: 100%;
    }
`

export const PerformanceImg = styled.img`
    width: 100%;
`

