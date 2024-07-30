import styled from 'styled-components';
// img
const whiteLogo = '/assets/whiteLogo.png';

export const Container = styled.div`
    margin-top: 100px;
    display: flex;
    width: 100%;
    height: 200px;
    background-color: #0D1E29;
    justify-content: center;
    overflow: hidden;
    @media (max-width: 1000px) {
        justify-content: flex-start;
        height: 230px;
    }
    @media (max-width: 600px) {
        margin-top: 20px;
        height: 230px;
    }
`;

export const WhiteLogo = styled.img.attrs({
    src: whiteLogo,
    alt: "흑백로고",
})`
    margin: auto 80px;
    height: 100px;
    @media (max-width: 1400px) {
        margin: auto 40px auto 80px;
        height: 80px;
    }
    @media (max-width: 1150px) {
        display: none;
    }
`;

export const TextBox = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CompanyName = styled.div`
    font-size: 22px;
    margin-bottom: 15px;
    padding: 0 20px;
    @media (max-width: 1000px) {
        margin: 0 0 0 20px;
    }
    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const CompanyInformation = styled.ul`
    display: flex;
    width: 1200px;
    list-style-type: none;
    font-size: 18px;
    padding: 0px;
    @media (max-width: 1400px) {
        font-size: 15px;
        width: 1000px;
    }
    @media (max-width: 1000px) {
        width: auto;
        font-size: 15px;
        flex-direction: column;
    }
    @media (max-width: 1000px) {
        width: auto;
        font-size: 13px;
        flex-direction: column;
    }
`;

export const Content = styled.li`
    padding: 0 20px;
    @media (max-width: 1000px) {
        margin: 5px;
        margin-left: 20px;
    }
`;