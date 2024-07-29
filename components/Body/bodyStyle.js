import styled from "styled-components";

export const SubColumnContainer = styled.div`
    margin: 0 auto 150px auto;
    display: flex;
    width: 1500px;
    flex-direction: column;
    align-items: flex-start;
    @media (max-width: 1600px) {
        max-width: 80%;
        margin: 0 auto 100px auto;
    }
    @media (max-width: 600px) {
        margin: 0 auto 50px auto;
        max-width: 90%;
    }
`

export const SubLargeTitle = styled.div`
    width: 100%;
    font-size: 48px;
    font-family: var(--font-sansBold);
    @media (max-width: 1000px) {
        font-size: 36px;
    }
    @media (max-width: 600px) {
        font-size: 28px;
    }
`

export const SubTitle = styled.div`
    max-width: 100%;
    font-size: 40px;
    font-family: var(--font-sansBold);
    @media (max-width: 1000px) {
        font-size: 34px;
    }
    @media (max-width: 600px) {
        font-size: 26px;
    }
`

export const FullSubContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px; 
    margin-bottom: 35px;
    @media (max-width: 600px) {
        line-height: 35px;
        font-size: 16px;
        margin-bottom: 10px;
    }
`

export const ImgSubTitle = styled.div`
    margin-bottom: 15px;
    font-size: 40px;
    font-family: var(--font-sansBold);
    @media (max-width: 1520px) {
         font-size: 34px;
    }
    @media (max-width: 600px) {
         font-size: 26px;
    }
`

export const ImgSubContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    font-size: 20px;
    font-family: var(--font-sansRegular);
    color: #313131;
    line-height: 45px; 
    /* @media (max-width: 1520px) {
        font-size: 20px;
    } */
    @media (max-width: 600px) {
        line-height: 35px;
        font-size: 16px;
    }
`

