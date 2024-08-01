import styled from "styled-components";

const laboratory = '/assets/Company/laboratory.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${laboratory});
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
    padding-top: 230px;
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
    @media(max-width: 600px){
        margin-top: 50px;
    }
`

export const FullSubContent = styled.div`
    margin: 0 auto 150px auto;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px;
    @media (max-width: 600px) {
        max-width: 90%;
        font-size: 16px;
        margin: 0 auto 50px auto;
    }
`

export const SubTitle = styled.div`
    margin-top: 10px;
    max-width: 90%;
    font-size: 40px;
    font-family: var(--font-sansBold);
`

export const SubjectBox = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    margin-top: 35px;
    @media(max-width: 1250px){
        width: 800px;
        justify-content: center;
    }
    @media(max-width: 850px){
        flex-wrap: wrap;
        width: 550px;
    }
    @media(max-width: 600px){
        flex-wrap: wrap;
        width: 370px;
    }
`
export const SubLabContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 600px) {
        margin: 0 auto 50px auto;
    }
`

export const SubCenterTitle = styled.div`
    margin-top: 10px;
    max-width: 80%;
    margin: 0 auto;
    font-size: 40px;
    font-family: var(--font-sansBold);
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
        max-width: 90%;
        font-size: 32px;
    }
`


export const Subject = styled.div`
    display: flex;
    margin: 0 30px;
    justify-content: center;
    border: 2px solid #A0A0A0; 
    border-radius: 10px;
    font-family: var(--font-sansMedium);
    font-size: 22px;
    color: #313131;
    padding: 20px;
    width: 270px;
    @media(max-width: 1520px){
        width: 230px;
        font-size: 18px;
        margin: 0 15px;
    }
    @media(max-width: 1250px){
        font-size: 16px;
        padding: 10px;
        margin: 0 10px 10px;
    }
    @media(max-width: 600px){
        font-size: 16px;
        width: 150px;
        margin: 0 5px 10px;
    }
`

export const LabImgBox = styled.div`
    display: flex;
    justify-content: center;
    width: 1100px;
    margin: 0 auto;
    @media(max-width: 1250px){
        width: 630px;
    }
     @media(max-width: 600px){
        width: 380px;
        flex-wrap: wrap;
    }
`

export const LabImg = styled.img`
    border-radius: 3px;
    width: 500px;
    margin: 20px 50px;
    @media(max-width: 1520px){
        width: 450px;
        margin: 20px 25px;
    }
    @media(max-width: 1250px){
        width: 400px;
        margin: 20px 10px;
    }
    @media(max-width: 850px){
        width: 260px;
        margin: 20px 10px;
    }
     @media(max-width: 600px){
        width: 360px;
        margin: 20px 0px;
    }
`