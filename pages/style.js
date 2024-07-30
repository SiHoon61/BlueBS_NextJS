import styled from "styled-components";

//img
const downArrow = '/assets/Home/downArrow.svg';
const tech1 = '/assets/Home/tech1.png';
const tech2 = '/assets/Home/tech2.png';
const tech3 = '/assets/Home/tech3.png';
const tech4 = '/assets/Home/tech4.png';
const boxArrow = '/assets/Home/boxArrow.svg';
const productsBackground = '/assets/Home/productsBackground.png';

export const VideoContainer = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.$height}px;
    z-index: 0;
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ScrollDown = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -61px;
    color: white;
    font-size: 22px;
    font-family: var(--font-sansRegular);
`;

export const DownImg = styled.img.attrs({
    src: downArrow,
    alt: "아래 화살표"
})`
    margin-top: 5px;
    height: 40px;
`;

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
`;

export const TechText = styled.div`
    margin: 100px 0px 35px 10%;
    font-size: 96px;
    font-family: var(--font-sansBold);
    @media (max-width: 600px) {
        font-size: 48px;
    }
`;

export const TechSubIndexContainer = styled.div`
    height: 700px;
    max-width: ${props => props.$width}px;
    display:flex;
    @media (max-width: 1000px) {
        flex-wrap: wrap;
        height: 500px;
    }
`;

export const Tech1 = styled.div`
    position: relative;
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${tech1});
    width: ${props => props.$width}px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: opacity 0.3s, width 0.3s;
    cursor: pointer;
    @media (min-width: 1001px) {
        &:hover {
            width: calc(${props => props.$width}px * 1.5);
            transition: 0.3s;
            img {
                opacity: 1;
                transition: 0.3s;
            }
        }
    }
    @media (max-width: 1000px) {
        width: calc(${props => props.$width}px * 2 );
    }
`;

export const Tech2 = styled.div`
    position: relative;
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${tech2});
    width: ${props => props.$width}px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: opacity 0.3s, width 0.3s;
    cursor: pointer;
    @media (min-width: 1001px) {
        &:hover {
            width: calc(${props => props.$width}px * 1.5);
            transition: 0.3s;
            img {
                opacity: 1;
                transition: 0.3s;
            }
        }
    }
    @media (max-width: 1000px) {
        width: calc(${props => props.$width}px * 2 );
    }
`;

export const Tech3 = styled.div`
    position: relative;
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${tech3});
    width: ${props => props.$width}px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: opacity 0.3s, width 0.3s;
    cursor: pointer;
    @media (min-width: 1001px) {
        &:hover {
            width: calc(${props => props.$width}px * 1.5);
            transition: 0.3s;
            img {
                opacity: 1;
                transition: 0.3s;
            }
        }
    }
    @media (max-width: 1000px) {
        width: calc(${props => props.$width}px * 2);
    }
`;

export const Tech4 = styled.div`
    position: relative; 
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${tech4});
    width: ${props => props.$width}px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: opacity 0.3s, width 0.3s;
    cursor: pointer;
    @media (min-width: 1001px) {
        &:hover {
            width: calc(${props => props.$width}px * 1.5);
            transition: 0.3s;
            img {
                opacity: 1;
                transition: 0.3s;
            }
        }
    }
    @media (max-width: 1000px) {
        width: calc(${props => props.$width}px * 2);
    }
`;

export const TechTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFEA32;
    font-size: 30px;
    font-family: var(--font-sansBold);
    position: absolute;
    bottom: 15%;
    left: 8%;
    @media (max-width: 1480px) {
        font-size: 25px;
    }
    @media (max-width: 1220px) {
        font-size: 20px;
    }
    @media (max-width: 600px) {
        font-size: 18px;
        visibility: hidden;
        bottom: 10%;
    }
`;

export const TechTextBox = styled.div`
    font-size: 44px;
    font-family: var(--font-sansBold);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    color: white;
    @media (max-width: 1480px) {
        font-size: 35px;
    }
    @media (max-width: 1220px) {
        font-size: 30px;
    }
    @media (max-width: 600px) {
        visibility: visible;
        font-size: 23px;
    }
`;

export const TectTextArrow = styled.img.attrs({
    src: boxArrow,
    alt: 'boxArrow'
})`
    opacity: 0;
    margin-bottom: 10px;
    margin-left: 20px;
    height: 35px;
    @media (max-width: 1220px) {
        height: 25px;
    }
`;

export const BusinessContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
`;

export const BusinessTextBox = styled.div`
    display:flex;
    justify-content: flex-end;
    width: 100%;
`;

export const BusinessText = styled.div` 
    margin: 100px 10% 35px 0px;
    font-size: 96px;
    font-family: var(--font-sansBold);
    @media (max-width: 600px) {
        font-size: 48px;
        margin: 50px 10% 15px 0px;
    }
`;

export const ProductsContainer = styled.div`
    margin-top: 100px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
    background-image: url(${productsBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center; 
`;

export const ProductsText = styled.div` 
    margin: 100px 0px 35px 10%;
    color: white;
    font-size: 96px;
    font-family: var(--font-sansBold);
    @media (max-width: 600px) {
        font-size: 48px;
        margin: 30px 0 20px 10%;
    }
`;

export const NewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    overflow: hidden;
`;

export const NewsText = styled.div`
    margin: 100px 0px 35px 0px;
    font-size: 96px;
    font-family: var(--font-sansBold);
    @media (max-width: 600px) {
        font-size: 48px;
    }
`;

export const NewsBox = styled.div`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1%;
    justify-content: center;
    @media (max-width: 1250px) {
        justify-content: flex-start;
        gap: 3%;
    }
    @media (max-width: 750px) {
        justify-content: center;
    }
`;
