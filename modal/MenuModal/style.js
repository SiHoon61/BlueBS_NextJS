import styled from 'styled-components';

//img
const backgroundIMG = '/assets/Home/menuBackground.png';
const whitePlus = '/assets/Home/whitePlus.svg';

export const MenuContainer = styled.div`
    background-image: url(${backgroundIMG});
    background-blend-mode: multiply;
    background-color: rgba(36, 36, 36, 0.25);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: ${props => props.$isOpen ? 1 : 0};
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    transition: opacity 0.3s, visibility 0.3s;
`

export const CloseButton = styled.img`
    width: 60px;
    height: 60px;
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    @media (max-width: 600px){
        width: 50px;
        height: 50px;
        top: 17px;
        right: 10px;
    }
`

export const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 30px 0 60px;
    padding-top: 50px;
    @media (max-width: 1000px){
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: nowrap;
        margin: 0 6%;
    }
`

export const MenuBox = styled.div`
    margin: 30px 60px 10px 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: white;
    @media (max-width: 1000px){
        margin: 10px 30px;
    }
`
export const MenuTitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const MenuTitle = styled.div`
    font-size: 24px;
    font-family: var(--font-sansMedium);
    @media (max-width: 1000px){
        font-size: 20px;
    }
`

export const PlusButton = styled.div`
    width: 25px;
    height: 25px;
    margin-left: 15px;
    margin-top: 5px;
    background: url(${whitePlus}) no-repeat center; 
    background-size: contain;
    transition: transform 0.3s ease;
    transform: ${props => props.$isactive ? 'rotate(45deg)' : 'rotate(0)'};
`;


export const MenuUl = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0px;
    @media (max-width: 1000px){
         align-items: flex-start;
        overflow: hidden; 
        transition: max-height 0.5s ease-out, opacity 0.5s ease, visibility 0.5s;
        max-height: ${props => props.$activeMenu ? "400px" : "0px"}; 
        opacity: ${props => props.$activeMenu ? 1 : 0};
        visibility: ${props => props.$activeMenu ? "visible" : "hidden"};
    }
`

export const MenuLi = styled.li`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: var(--font-sansMedium);
    cursor: pointer;
    @media (max-width: 1000px){
        font-size: 16px;
    }
`
