import styled from 'styled-components';

export const SliderContainer = styled.div`
    .slick-list{ //라이브러리 css 오버라이딩
        width: 2700px;
        height: 534px;
    }
    .slick-slider{
        position: static;
    }
    .slick-prev {
        z-index: 10;
        left: 5%;
        top: 530px;
    }
    .slick-next {
        z-index: 10;
        right: 6%;
        top: 530px;
    }
    .slick-prev:before,
    .slick-next:before
    {
        display: none;				
    }
    @media (max-width: 600px) {
        .slick-list {
            width: 1200px;
            height: 234px;
        }
        .slick-prev {
            left: 1%;
            top: 260px;
        }
        .slick-next {
            right: 4%;
            top: 260px;
        }
    }
`;

export const NextTo = styled.div`
    background-image: url(/assets/Home/rightArrow.svg);
    background-size: contain;
    opacity: 70%;
    height: 50px;
    width: 50px;
    @media (max-width: 600px){
        background-image: url(/assets/Home/arrow.png);
        height: 35px;
        width: 35px;
    }
`;

export const Prev = styled.div`
    transform: rotate(180deg);
    opacity: 70%;
    background-image: url(/assets/Home/rightArrow.svg);
    background-size: contain;
    height: 50px;
    width: 50px;
    @media (max-width: 600px){
        background-image: url(/assets/Home/arrow.png);
        height: 35px;
        width: 35px;
    }
`;

export const ImageBox = styled.div`
`;

export const BusinessImage = styled.div`
    background-blend-mode: multiply;
    background: linear-gradient(180deg, rgba(36, 36, 36, 0.00) 0%, rgba(36, 36, 36, 0.00) 0.01%, rgba(36, 36, 36, 0.46) 81.5%), url(${props => props.$src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    width: 800px;
    height: 534px;
    margin: auto;
    display: flex;
    position: relative;
    cursor: pointer;
    @media (max-width: 600px){
        width: 340px;
        height: 250px;
    }
`;

export const BusinessTextBox = styled.div`
    display:flex;
    position: absolute;
    bottom: 15%;
    left: 5%;
    flex-direction: column;
    font-size: 20px;
    color: white;
    @media (max-width: 600px){
        font-size: 16px;
        padding-right: 20px;
    }
`;

export const BusinessTitleText = styled.div`
    margin-bottom: 6px;
    font-size: 48px;
    font-family: var(--font-sansBold);
    @media (max-width: 600px){
        font-size: 24px;
    }
`;
