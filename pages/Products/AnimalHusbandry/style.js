import styled from "styled-components";

//img
import AnimalHusbandryPD from '../../../assets/Products/AnimalHusbandry/AnimalHusbandryPD.png'
import processArrow from '../../../assets/Products/Agriculture/processArrow.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${AnimalHusbandryPD});
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
`
export const TitleMainText = styled.div`
    font-size: 96px;
    font-family: var(--font-sansBold);
`


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    width: 100%;
`
export const SubRowContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

export const SubColumnContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const SubLargeContainer = styled.div`
    margin: 0 auto 50px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px; 
`


export const ProcessBox = styled.div`
    width: 1500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 35px;
    align-items: center;
`

export const ProcessImgs = styled.img`
    width: 410px;
    margin-bottom: 5px;
`

export const ImgDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 20px;
    align-items: center;
`

export const GreyDescription = styled.span`
    font-size: 18px;
    color: #313131;
    font-family: var(--font-sansRegular);
`

export const EmptyDescription = styled.div`
    height: 26px;
    width: 26px;
`

export const ProcessArrow = styled.img.attrs({
    src: processArrow,
    alt: 'processArrow'
})`
    width: 70px;
    height: 70px;
    margin-bottom: 40px;
`