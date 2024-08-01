import styled from "styled-components";

//img
const sewer = '/assets/Business/Sewer/sewer.png'
const sewerBody = '/assets/Business/Sewer/sewerBody.png'
const sewerProcess = '/assets/Business/Sewer/sewerProcess.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${sewer});
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
    background-image: url(${sewerBody});
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

export const ProcessImg = styled.img.attrs({
    src: sewerProcess,
    alt:'sewerProcess'
})`
    width: 100%;
`


export const PerformanceImgBox = styled.div`
    margin-top: 35px;
    @media (max-width: 100px) {
        margin-top: 20px;
    }
    @media (max-width: 600px) {
         margin-top: 15px;
    }
`

export const PerformanceImgContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-wrap:wrap;
        justify-content: center;
    }
`

export const PerformanceImg = styled.img`
    width: 720px;
    margin: 0 10px;
    @media (max-width: 1600px) {
        width: 47%;
    }
    @media (max-width: 1000px) {
        width: 45%;
    }
    @media (max-width: 600px) {
        margin-top: 10px;
        width: 100%;
    }
`






