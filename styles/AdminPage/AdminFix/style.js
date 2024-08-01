import styled from "styled-components";

export const NewsContainer = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    width: 1450px;
    justify-content: flex-start;
    @media (max-width: 1450px) {
        width: 1000px;
    }
`

export const Title = styled.div`
    display: flex;
    font-size: 30px;
    font-family: var(--font-sansBold);
    margin: 30px auto 50px;
    width: 100%;
    justify-content: center;
`

export const DataBox = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: 400px;
    width: 450px;
    border-radius: 10px;
    margin-bottom: 50px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 0 15px 35px;
    @media (max-width: 1450px) {
        width: 300px;
        height: 300px;
    }
`

export const DataImgs = styled.img`
    width: 100%;
    height: 75%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
`

export const DataTitle = styled.div`
    margin: 10px;
    height: 40px;
    font-size: 18px;
    font-family: var(--font-sansMedium);
`

export const DataDate = styled.div`
    display: flex;
    justify-content: space-between;
    color: #717171;
    font-size: 14px;
    bottom: 10px;
    left: 10px;
`

export const DateText = styled.div`
    margin: 0 10px;
`

export const FixBox = styled.div`
    display: flex;
    margin: 0 10px;
    flex-direction: row;
`

export const FixButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #434343;
    color: white;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 16px;
    &:hover{
        filter: brightness(70%);
    }
    transition: filter 0.3s;
    cursor: pointer;
`

export const DeleteButton = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    background-color: #CB2500;
    color: white;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    font-size: 16px;
    &:hover{
        filter: brightness(70%);
    }
    transition: filter 0.3s;
    cursor: pointer;
`