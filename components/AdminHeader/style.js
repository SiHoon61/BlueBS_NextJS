import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    font-size: 60px;
    color: white;
    background-color: #1B3F84;
    font-family: var(--font-sansBold);
    align-items: center;
    justify-content: center;
`;

export const NavBox = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin: 30px 0;
    padding: 0px;
`;

export const Navcontent = styled.li`
    font-family: var(--font-sansMedium);
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    margin: 0 50px;
    font-size: 18px;
    cursor: pointer;
`;
