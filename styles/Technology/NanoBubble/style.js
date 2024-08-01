import styled from "styled-components";
const nanobubble = '/assets/Technology/nanobubble.png'
//img
const nanoFeature = '/assets/Technology/nanoFeature.png'
const nanoBird = '/assets/Technology/nanoBird2.png'
const nanoMonitoring = '/assets/Technology/nanoMonitoring.png'
const nanoDevelop = '/assets/Technology/nanoDevelop.svg'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${nanobubble});
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

export const ExampleSubTitle = styled.div`
    margin-top: 10px;
    margin-left: 110px;
    width: 1390px;
    font-size: 40px;
    font-family: var(--font-sansBold);
`

export const NanoImgBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
        flex-wrap: wrap;
    }
    @media (max-width: 1000px) {
        justify-content: center;
    }
`
export const NanoImg1 = styled.img`
    width: 370px;
    margin-bottom: 5px;
    @media (max-width: 1685px) {
        width: 250px
    }
    @media (max-width: 1200px) {
        width: 340px;
    }
    @media (max-width: 1000px) {
        width: 550px;
    }
    @media (max-width: 600px) {
        width: 350px;
    }
`

export const NanoVideo2 = styled.video`
    width: 435px;
    margin: 0 30px 5px 30px;
    @media (max-width: 1685px) {
        width: 290px
    }
    @media (max-width: 1200px) {
        width: 390px
    }
    @media (max-width: 1000px) {
        width: 550px;
    }
    @media (max-width: 600px) {
        width: 350px;
    }
`

export const NanoVideo3 = styled.video`
    width: 500px;
    margin-bottom: 5px;
    @media (max-width: 1685px) {
        width: 350px
    }
    @media (max-width: 1000px) {
        width: 550px;
    }
    @media (max-width: 600px) {
        width: 350px;
    }
`

export const ImgDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 18px;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 1000px) {
        font-size: 16px;
    }
`

export const GreyDescription = styled.span`
    font-size: 18px;
    color: black;
    font-family: var(--font-sansMedium);
    @media (max-width: 1000px) {
        font-size: 16px;
    }
`

export const GreyStyle = styled.span`
    font-size: 18px;
    color: #313131;
    font-family: var(--font-sansMedium);
`

export const NanoFeatureImg = styled.img.attrs({
    src: nanoFeature,
    alt: 'nanoFeature'
})`
    width: 100%;
`

export const NanoBirdImg = styled.img.attrs({
    src: nanoBird,
    alt: 'nanoBird'
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

export const NanoExampleBox = styled.div`
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 1000px) {
         flex-wrap: wrap;
         justify-content: flex-start;
    }
    @media (max-width: 600px) {
         justify-content: center;
    }
`

export const NanoExampleImg = styled.img`
    width: 300px;
    margin: 0 30px 5px;
     @media (max-width: 1250px) {
         width: 250px;
         margin: 0 15px 5px;
    }
    @media (max-width: 1000px) {
        margin: 0 10px 5px;
    }
    @media (max-width: 600px) {
        width: 80%;
    }
`

export const NanoMonitoring = styled.img.attrs({
    src: nanoMonitoring,
    alt: 'nanoMonitoring'
})`
    width: 550px;
    margin-left: 50px;
    @media (max-width: 1520px) {
        width: 400px;
        margin-left: 30px;
    }
    @media (max-width: 925px) {
        margin-top: 20px;
        width: 80%;
        margin-left: 0px;
    }
`

export const NanoDevelopImg = styled.img.attrs({
    src: nanoDevelop,
    alt: 'nanoDevelop'
})`
    width: 100%;
`

export const NanoSoftWareBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const NanoSoftWareImg = styled.img`
    width: 350px;
    margin-right: 15px;
    @media (max-width: 950px) {
        width: 200px;
    }
    @media (max-width: 500px) {
        width: 150px;
        margin-right: 5px;
    }
`