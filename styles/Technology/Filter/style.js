import styled from "styled-components";
const filter = '/assets/Technology/filter.png'
const msFilter = '/assets/Technology/msFilter.png'
const msfFeature = '/assets/Technology/msfFeature.svg'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${filter});
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

export const SubColumnContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
        max-width: 90%;
        margin-bottom: 50px;
    }
`

export const MSFImg = styled.img.attrs({
    src: msFilter,
    alt: 'msFilter'
})`
    width: 350px;
    margin-left: 50px;
    @media (max-width: 1520px) {
        width: 300px;
        margin-left: 30px;
    }
    @media (max-width: 925px) {
        margin-top: 30px;
        width: 50%;
        margin-left: 0px;
    }
    @media (max-width: 600px) {
        margin-top: 30px;
        width: 80%;
        margin-left: 0px;
    }
`

export const SubLargeTitle = styled.div`
    margin-top: 10px;
    width: 1500px;
    font-size: 48px;
    font-family: var(--font-sansBold);
`

export const SubTitle = styled.div`
    margin-top: 10px;
    width: 1500px;
    font-size: 40px;
    font-family: var(--font-sansBold);
`

export const FullSubContent = styled.div`
    width: 1500px;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px; 
    margin-bottom: 35px;
`

export const ContentLi = styled.li`
    margin: 20px 0px;
`

export const FilterVideo = styled.video`
    width: 100%;
`

export const BoldStyle = styled.span`
    font-family: var(--font-sansBold);
`

export const MSFFeatureImg = styled.img.attrs({
    src: msfFeature,
    alt: 'msfFeature'
})`
    width: 100%;
`