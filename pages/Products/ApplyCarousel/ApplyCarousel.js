import React from "react";
import Slider from "react-slick";

//img
import arrow from "../../../assets/arrow.png"

//library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./applySliderStyles.css"
import styled from 'styled-components';

//stlye
const SliderContainer = styled.div`
    margin-top: 35px;
    width: 100%;
    .slick-prev {
        z-index: 10;
        left: 2.5%;
    }
    .slick-next {
        z-index: 10;
        right: 3.5%;
    }
    @media (max-width: 1600px) {
        .slick-prev {
            left: 0%;
        }
        .slick-next {
            right: 1.4%;
        }   
    }
    @media (max-width: 1200px) {
        .slick-prev {
            left: 0%;
        }
        .slick-next {
            right: 2.5%;
        }   
    }
    @media (max-width: 1000px) {
        .slick-prev {
            left: -1.3%;
        }
        .slick-next {
            right: 1.5%;
        }   
    }
    @media (max-width: 600px) {
        .slick-prev {
            left: -1.5%;
        }
        .slick-next {
            right: 0.5%;
        }   
    }
`

const NextTo = styled.div`
    background-image: url(${arrow});
    background-size: contain;
    height: 40px;
    width: 40px;
    @media (max-width: 600px) {
        height: 30px;
        width: 30px;
    }
`

const Prev = styled.div`
    transform: rotate(180deg);
    background-image: url(${arrow});
    background-size: contain;
    height: 40px;
    width: 40px;
    @media (max-width: 600px) {
        height: 30px;
        width: 30px;
    }
`

const ImgContainer = styled.div`
    align-items: center;
    align-content: center;
    vertical-align: middle;
`

const Img = styled.img`
    margin: auto auto;
    max-width: 90%;
    height: auto;
`


function SimpleSlider(imgProps) {
    const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
        <span {...props}>{children}</span>
    );
    const settings = {

        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <SlickButtonFix>
                <NextTo />
            </SlickButtonFix>
        ),
        prevArrow: (
            <SlickButtonFix>
                <Prev />
            </SlickButtonFix>
        ),
    };
    return (
        <SliderContainer className="apply">
            <Slider {...settings}>
                {imgProps.imgJson.map((list, index) => (
                    <ImgContainer>
                        <Img
                            src={list.src}
                            alt={list.alt}
                            key={index} />
                    </ImgContainer>
                ))}
            </Slider>
        </SliderContainer>
    );
}

export default SimpleSlider;