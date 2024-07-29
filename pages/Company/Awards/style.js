import styled from "styled-components";

//img
import company from '../../../assets/Company/company.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${company});
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
    position: relative;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
    @media (max-width: 600px) {
        margin-top: 40px;
    }
`

export const ButtonBox = styled.div`
    display: flex;
    margin: 0 auto;
`

export const CertificationButtonText = styled.div`
    display: flex;
    justify-content: center;
    width: 70px; 
    padding: 0 5px;
    font-size: 20px;
    font-family: ${props => props.$isSelect === '0' ? 'var(--font-sansBold)' : 'var(--font-sansMedium)'};
    color: ${props => props.$isSelect === '0' ? '#004A9F' : 'grey'};
    transition: all 0.3s ease;
    cursor: pointer;
`

export const AwardsButtonText = styled.div`
    display: flex;
    justify-content: center;
    width: 70px; 
    padding: 0 5px;
    font-size: 20px;
    font-family: ${props => props.$isSelect === '1' ? 'var(--font-sansBold)' : 'var(--font-sansMedium)'};
    color: ${props => props.$isSelect === '1' ? '#004A9F' : 'grey'};
    transition: all 0.3s ease;
    cursor: pointer;
`
export const PatentButtonText = styled.div`
    display: flex;
    justify-content: center;
    width: 70px; 
    padding: 0 5px;
    font-size: 20px;
    font-family: ${props => props.$isSelect === '2' ? 'var(--font-sansBold)' : 'var(--font-sansMedium)'};
    color: ${props => props.$isSelect === '2' ? '#004A9F' : 'grey'};
    transition: all 0.3s ease;
    cursor: pointer;
`

export const EmptyColumn = styled.div`
    height: ${props => {
        if (props.$isSelect === '0') {
            return '1630'
        }
        else if (props.$isSelect === '1') {
            return '1052'
        }
        else {
            return '2980'
        }
    }}px;
    @media (max-width: 1460px) {
        height: ${props => {
        if (props.$isSelect === '0') {
            return '2250'
        }
        else if (props.$isSelect === '1') {
            return '1052'
        }
        else {
            return '4150'
        }
    }}px;
    }
    @media (max-width: 1100px) {
        height: ${props => {
        if (props.$isSelect === '0') {
            return '1950'
        }
        else if (props.$isSelect === '1') {
            return '852'
        }
        else {
            return '3650'
        }
    }}px;
    }
    @media (max-width: 950px) {
        height: ${props => {
        if (props.$isSelect === '0') {
            return '1410'
        }
        else if (props.$isSelect === '1') {
            return '590'
        }
        else {
            return '2800'
        }
    }}px;
    }
    @media (max-width: 650px) {
        height: ${props => {
        if (props.$isSelect === '0') {
            return '1100'
        }
        else if (props.$isSelect === '1') {
            return '530'
        }
        else {
            return '2290'
        }
    }}px;
    }
`

export const CertificationPart = styled.div`
    position: absolute;
    width: 1444px;
    top: 80px;
    flex-wrap: wrap;
    display: ${props => props.$isSelect === '0' ? 'flex' : 'none'};
    @media (max-width: 1460px) {
        width: 1080px;
    }
    @media (max-width: 1100px) {
        width: 930px;
    }
    @media (max-width: 950px) {
        width: 630px;
    }
    @media (max-width: 650px) {
        width: 390px;
    }
`

export const AwardsPart = styled.div`
    position: absolute;
    width: 1444px;
    top: 80px;
    align-items: center;
    flex-wrap: wrap;
    display: ${props => props.$isSelect === '1' ? 'flex' : 'none'};
    @media (max-width: 1460px) {
        width: 1080px;
    }
    @media (max-width: 1100px) {
        width: 930px;
    }
    @media (max-width: 950px) {
        width: 630px;
    }
    @media (max-width: 650px) {
        width: 390px;
    }
`

export const PatentPart = styled.div`
    position: absolute;
    width: 1449px;
    top: 80px;
    flex-wrap: wrap;
    display: ${props => props.$isSelect === '2' ? 'flex' : 'none'};
    @media (max-width: 1460px) {
        width: 1086px;
    }
    @media (max-width: 1100px) {
        width: 936px;
    }
    @media (max-width: 950px) {
        width: 636px;
    }
    @media (max-width: 650px) {
        width: 396px;
    }
    
`

export const AwardBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 30px 70px 30px;
    @media (max-width: 650px) {
        margin: 0 15px 50px 15px;
    }
`


export const AwardImg = styled.img`
    width: 300px;
    height: 425px;
    border: 1px solid grey;
    @media (max-width: 1100px) {
        width: 250px;
        height: 350px;
    }
    @media (max-width: 950px) {
        width: 150px;
        height: 212px;
    }
    @media (max-width: 650px) {
        width: 100px;
        height: 140px;
    }
`

export const NoBorderAwardImg = styled.img`
    width: 300px;
    height: 425px;
    @media (max-width: 1100px) {
        width: 250px;
        height: 350px;
    }
    @media (max-width: 950px) {
        width: 150px;
        height: 212px;
    }
    @media (max-width: 650px) {
        width: 100px;
        height: 140px;
    }
`

export const AwardDescription = styled.div`
    display: flex;
    width: 250px;
    flex-direction: column;
    align-items: center;
    color: #0B75EF;
    margin-top: 5px;
    @media (max-width: 950px) {
        width: 150px;
        font-size: 14px;
    }
    @media (max-width: 650px) {
        width: 100px;
        font-size: 12px;
    }
`

export const AwardName = styled.div`
    margin-top: 5px;
    color: black;
    font-size: 18px;
    font-family: var(--font-sansMedium);
    @media (max-width: 950px) {
        font-size: 16px;
    }
    @media (max-width: 650px) {
        font-size: 14px;
    }
`
