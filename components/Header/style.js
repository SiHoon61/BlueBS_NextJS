import styled from 'styled-components';

// img
const whiteLogo = '/assets/whiteLogo.png';
const blueLogo = '/assets/blueLogo.png';
const whiteMenu = '/assets/Home/whiteMenu.svg';
const blackMenu = '/assets/Home/blackMenu.svg';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 50;
    width: 100%;
    background-color: ${props => props.$state === 'top' ? 'transparent' : 'white'};
    color: ${props => props.$state === 'top' ? 'white' : 'black'};
    height: ${props => props.$state === 'top' ? 90 : 70}px;
    transition: top 0.3s, background-color 0.3s, height 0.3s;
    object-fit: cover;
    box-shadow: ${props => props.$state === 'top' ? 'none' : '0px 2px 6px 0px rgba(0, 0, 0, 0.25)'};
    @media (max-width: 1000px) {
        /* height: ${props => props.$state === 'top' ? 120 : 100}px; */
    }
`;

export const WhiteLogo = styled.img.attrs({
    src: whiteLogo,
    alt: "흑백로고",
})`
    cursor: pointer;
    height: 60px;
    margin-left: 80px;
    @media (max-width: 1000px) {
        margin-left: 20px;
    }
`;

export const BlueLogo = styled.img.attrs({
    src: blueLogo,
    alt: "컬러로고",
})`
    cursor: pointer;
    height: 60px;
    margin-left: 80px;
    @media (max-width: 1000px) {
        margin-left: 20px;
    }
`;

export const EmptyBox = styled.div`
    width: 150px;
    height: 60px;
    margin-right: 80px;
    @media (max-width: 1200px) {
        margin-right: 10px;
    }
`

export const IndexContainer = styled.div`
    display: flex;
    @media (max-width: 1000px) {
        display: none;
    }
`;

export const IndexUL = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`

export const IndexLI = styled.li`
    display: flex;
    height: 80px;
    align-items: center;
    position: relative;
    justify-content: center;
    padding: 0 50px;
    font-size: 18px;
    font-family: var(--font-sansMedium);
    cursor: pointer;

    @media (max-width: 1200px) {
        padding: 0 30px;
        font-size: 16px;
    }
`

export const HoverBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: ${props => props.$width}px;
    top: ${({ $isHovered }) => ($isHovered ? 70 : 60)}px;
    background-color: white; 
    padding: 18px 0px 18px 0px; 
    box-shadow: 0px 10px 25px rgba(49,49,63,0.4);
    border-radius: 7px;
    opacity: ${({ $isHovered }) => ($isHovered ? 1 : 0)};
    transition: all 0.3s ease;
    pointer-events: ${({ $isHovered }) => ($isHovered ? 'auto' : 'none')};
`

export const TextTextBox = styled.div`
    color: black;
    font-size: 16px;
    font-family: var(--font-sansRegular);
    margin: 8px;
    cursor: pointer;
`
export const WhiteMenu = styled.img.attrs({
    src: whiteMenu,
    alt: 'menu'
})`
    margin-right: 30px;
    display: none;
    @media (max-width: 1000px) {
        display: flex;
    }
    @media (max-width: 600px) {
        width: 30px;
        margin-right: 20px;
    }
`

export const BlackMenu = styled.img.attrs({
    src: blackMenu,
    alt: 'menu'
})`
    margin-right: 30px;
    display: none;
    @media (max-width: 1000px) {
        display: flex;
    }
    @media (max-width: 600px) {
        width: 30px;
        margin-right: 20px;
    }
`
