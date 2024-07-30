import styled from "styled-components";

//img
const electroCatalyst = '/assets/Technology/electroCatalyst.png'
const elecImg1 = '/assets/Technology/elecImg1.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${electroCatalyst});
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
    align-items: center;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 1500px;
    margin-bottom: 150px;
    @media (max-width: 1600px) {
        max-width: 80%;
        margin: 0 auto 100px auto;
    }
    @media (max-width: 925px) {
        flex-direction: column;
    }
    @media (max-width: 600px) {
        margin-bottom: 50px;
        max-width: 90%;
    }
`


export const ElecImg1 = styled.img.attrs({
    src: elecImg1,
    alt: 'elecImg1'
})`
    width: 450px;
    margin-left: 50px;
    @media (max-width: 1520px) {
        width: 300px;
        margin-left: 30px;
    }
    @media (max-width: 925px) {
        margin-top: 20px;
        width: 80%;
        margin-left: 0px;
    }
`

export const EFImgBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 1180px) {
        justify-content: center;
    }
`

export const EfImg = styled.img`
    width: 300px;
    margin-bottom: 35px;
    margin-right: 15px;
    @media (max-width: 1180px) {
        width: 45%;
    }
`