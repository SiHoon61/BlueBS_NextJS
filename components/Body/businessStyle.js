import styled from "styled-components";
//img
import arrow from '../../assets/Business/arrow.svg'

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
        padding-top: 200px;
    }
`
export const TitleMainText = styled.div`
    font-size: 96px;
    font-family: var(--font-sansBold);
    @media (max-width: 1400px) {
        font-size: 78px;
    }
    @media (max-width: 1000px) {
        font-size: 60px;
    }
    @media (max-width: 600px) {
        font-size: 32px;
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

export const PerformanceContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 28px;
    font-family: var(--font-sansMedium);
    color: #313131;
    @media (max-width: 1000px) {
        font-size: 24px;
    }
    @media (max-width: 600px) {
        font-size: 20px;
    }
`

export const PerformanceImgBox = styled.div`
    margin-top: 35px;
    width: 100%;
    @media (max-width: 100px) {
        margin-top: 20px;
    }
    @media (max-width: 600px) {
         margin-top: 15px;
    }
`

export const DescriptionBox = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding-left: 0px;
    margin: 5px 0px;
    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
`

export const Description = styled.li`
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: var(--font-sansBold);
    @media (max-width: 1600px) {
        font-size: 16px;
    }
    @media (max-width: 1000px) {
        font-size: 14px;
        margin-right: 15px;
        margin-bottom: 10px;
    }
    @media (max-width: 600px) {
        font-size: 12px;
    }
`

export const DescriptionStyle = styled.span`
    margin-left: 25px;
    font-size: 18px;
    font-family: var(--font-sansMedium);
    @media (max-width: 1600px) {
        font-size: 16px;
        margin-left: 23px;
    }
    @media (max-width: 1000px) {
        font-size: 14px;
        margin-left: 20px;
    }
    @media (max-width: 600px) {
        font-size: 12px;
        margin-left: 15px;
    }
`

export const More = styled.div`
    display: flex;
    width: 130px;
    height: 26px;
    border-radius: 20px;
    border: 2px solid #000;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 15px;
    @media (max-width: 1600px) {
        font-size: 14px;
        width: 120px;
    }
    @media (max-width: 1000px) {
        font-size: 12px;
        width: 100px;
        height: 22px;
    }
    @media (max-width: 600px) {
        font-size: 10px;
        width: 80px;
        height: 20px;
    }
`
export const Arrow = styled.img.attrs({
    src: arrow,
    alt: 'arrow'
})`
    margin-left: 10px;
    width: 15px;
    height: 15px;
    @media (max-width: 1600px) {
        width: 14px;
        height: 14px;
    }
    @media (max-width: 1000px) {
        width: 12px;
        height: 12px;
    }
    @media (max-width: 600px) {
        width: 10px;
        height: 10px;
    }
`

export const SubImgContainer_3 = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;;
    @media (max-width: 785px) {
        flex-wrap: wrap;
    }
    @media (max-width: 600px) {
        justify-content: center;
    }
`

export const ImgDescription_3 = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 18px;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 1400px){
        font-size: 16px;
        width: 300px;
        margin-right: 5px;
    }
    @media (max-width: 1000px){
        font-size: 14px;
        width: 200px;
    }
    @media (max-width: 600px){
        width: 340px;
    }
`

export const ImgDescription = styled.div`
    display: flex;
    flex-direction: column;
    font-family: var(--font-sansMedium);
    font-size: 18px;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: 1400px){
        font-size: 16px;
    }
    @media (max-width: 1000px){
        font-size: 14px;
    }
`

export const TechImg_3 = styled.img`
    width: 350px;
    height: 300px;
    border-radius: 5px;
    margin-bottom: 5px;
    @media (max-width: 1400px) {
        width: 300px;
        height: 250px;
    }
    @media (max-width: 1150px) {
        width: 250px;
        height: 200px;
    }
    @media (max-width: 965px) {
        width: 200px;
        height: 150px;
    }
    @media (max-width: 768px) {
        width: 240px;
        height: 190px;
    }
    @media (max-width: 600px) {
        width: 340px;
        height: 290px;
    }
`

export const EmptyBox = styled.div`
    width: 350px;
    height: 350px;
    @media (max-width: 1600px) {
        display: none;
    }
`

export const SubImgContainer_4 = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;;
    @media (max-width: 1600px) {
        flex-wrap: wrap;
    }
    @media (max-width: 1000px) {
        justify-content: space-around;
    }
    @media (max-width: 650px) {
        justify-content: center;
    }
`

export const TechImg_4 = styled.img`
    width: 350px;
    height: 300px;
    border-radius: 5px;
    margin-bottom: 5px;
    @media (max-width: 1600px) {
        width: 300px;
        height: 250px;
        margin: 0 3px;
    }
    @media (max-width: 1150px) {
        width: 250px;
        height: 200px;
    }
    @media (max-width: 1000px) {
        width: 280px;
        height: 230px;
    }
    @media (max-width: 785px) {
        width: 240px;
        height: 190px;
    }
    @media (max-width: 650px) {
        width: 340px;
        height: 290px;
    }
`
