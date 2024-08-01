import styled from "styled-components";

//img
const monitoring = '/assets/Business/Monitoring/Monitoring.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-image: url(${monitoring});
    background-blend-mode: multiply;
    background-color: rgba(36, 36, 36, 0.45);
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
    background-image: url(${props => props.$imageUrl});
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

export const FullImg = styled.img`
    margin-top: 35px;
    width: 100%;
`

export const SubImgContainer = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const TechImg = styled.img`
    width: 100%;
    border-radius: 5px;
    margin-bottom: 5px;
`

export const ImgDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 18px;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 1600px) {
        width: 32%;
    }
    @media (max-width: 1400px){
        font-size: 16px;
    }
    @media (max-width: 1000px){
        width: 100%;
    }
`
