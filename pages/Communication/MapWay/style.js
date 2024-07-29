import styled from "styled-components";

//img
import communication from '../../../assets/Communication/Communication.png'

export const TitleBar = styled.div`
    display: flex;
    height: 500px;
    width: 100%;
    background-blend-mode: multiply;
    background-image: url(${communication});
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
    @media (max-width: 600px) {
        margin-top: 50px;
    }
`

export const MapContainer = styled.div`
    display: flex;
    width: 65%;
    height: 400px;
    margin: 20px auto;
    #__react-kakao-maps-sdk___Map {
        width: 65%;
        height: 400px;
    }
    @media(max-width: 1600px){
        width: 80%;
    }
    @media(max-width: 1000px){
        margin: 5px auto;
        flex-direction: column-reverse;
        height: 470px;
        align-items: center;
        #__react-kakao-maps-sdk___Map {
            width: 95%;
        }
    }
`

export const MapDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 400px;
    margin-left: 50px;
    @media(max-width: 1000px){
        flex-direction: row;
        margin-left: 40px;
        height: 70px;
        width: 100%;
        justify-content: flex-start;
    }
    @media(max-width: 600px){
        flex-wrap: wrap;
        height: 160px;
    }
`

export const TextBox = styled.div`
    font-family: var(--font-sansBold);
    font-size: 18px;
    margin-bottom: 30px;
    @media(max-width: 1000px){
        margin-bottom: 0px;
        margin-right: 50px;
    }
    @media(max-width: 1000px){
        font-size: 15px;
    }
    @media(max-width: 600px){
        margin-bottom: 10px;
    }
`

export const EmptyBox = styled.div`
    display: none;
    @media(max-width: 600px){
        display: flex;
        width: 100px;
        height: 10px;
    }
    @media(max-width: 380px){
        display: flex;
        width: 50px;
        height: 10px;
    }
`

export const RegularText = styled.div`
    margin-top: 5px;
    font-size: 16px;
    font-family: var(--font-sansRegular);
    width: 230px;
    word-break: keep-all;
    @media(max-width: 1000px){
        width: auto;
    }
    @media(max-width: 1000px){
        font-size: 12px;
    }
`

export const Hr = styled.hr`
    border: 0;
    width: 65%;
    height: 2px;
    background-color: grey;
    @media(max-width: 1600px){
        width: 80%;
    }
`