import  { styled } from 'styled-components';

//img
const communication = '/assets/Communication/Communication.png';
const triangle = '/assets/Communication/triangle.png';

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
export const SubColumnContainer = styled.div`
    margin: 0 auto 30px auto;
    display: flex;
    max-width: 80%;
    flex-direction: column;
    align-items: center;
    @media (max-width: 650px) {
        margin: 0 auto 30px auto;
        max-width: 90%;
    }
`

export const BodyText = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 26px;
    line-height: 45px;
    font-family: var(--font-sansBold);
    word-break: keep-all;
    @media (max-width: 650px) {
        font-size: 20px;
    }
`
export const SmallText = styled.div`
    font-size: 16px;
    font-family: var(--font-sansMedium);
`

export const RedText = styled.span`
    color: #FA6E60;
`

export const InquiryContainer = styled.div`
    margin: 0 auto 30px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 80%;
    @media (max-width: 650px) {
        margin: 0 auto 50px auto;
        max-width: 90%;
    }
`

export const InquiryForm = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    margin-bottom: 30px;
    font-size: 20px;
    font-family: var(--font-sansBold);  
    @media (max-width: 1150px) {
       font-size: 18px;
    }
    @media (max-width: 650px) {
       flex-wrap: wrap;
       margin-bottom: 40px;
    }
    @media (max-width: 650px) {
       font-size: 16px;
    }
`

export const KeyText = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-family: var(--font-sansBold);  
    width: 100px;  
    margin-right: 120px;
    @media (max-width: 960px) {
        font-size: 18px;
        margin-right: 70px;
    }
    @media (max-width: 960px) {
        font-size: 18px;
        margin-right: 40px;
    }
    @media (max-width: 650px) {
        width: 100%;
        margin-bottom: 15px;
    }
`

export const Classify = styled.div`
    display: flex;
    font-size: 16px;
    font-family: var(--font-sansMedium); 
    align-items: center;
    padding-left: 15px;
    border: 1.5px solid gainsboro;
    border-radius: 15px;
    width: 240px;
    height: 50px;
    cursor: pointer;
    position: relative;
    @media (max-width: 1150px) {
       width: 180px;
       height: 58px;
    }
    @media (max-width: 1150px) {
       width: 180px;
       height: 45px;
    }
    @media (max-width: 650px) {
       width: 100%;
    }
`

export const ClassifyBox = styled.div`
    display: flex;
    font-size: 16px;
    background-color: white;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    box-shadow: 0px 2px 5px rgba(49,49,63,0.4);
    border-radius: 15px;
    width: 255px;
    position: absolute;
    top: ${props => props.$isClick ? 120 : 105}%;
    opacity: ${props => props.$isClick ? 1 : 0};
    pointer-events: ${props => props.$isClick ? 'auto' : 'none'};
    transition: all 0.3s ease;
    left: 0;
    margin-top: 2px;
    cursor: pointer;
    @media (max-width: 1150px) {
       width: 195px;
    }
    @media (max-width: 650px) {
       width: 100%;
    }
`

export const ClassifyOption = styled.div`
    font-size: 16px;
    margin: 5px 0;
`

export const Triangle = styled.img.attrs({
    src: triangle,
    alt: 'triangle'
})`
    position: absolute;
    right: 15px;
    width: 13px;
    transform: ${props => props.$isClick ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: all 0.3s ease;
`

export const InputBox = styled.input`
    display: flex;
    align-items: center;
    padding-left: 15px;
    margin-right: 10px;
    border: 1.5px solid gainsboro;
    border-radius: 15px;
    width: 240px;
    height: 50px;
    font-size: 16px;
    @media (max-width: 1150px) {
       width: 180px;
       height: 40px;
    }
    @media (max-width: 650px) {
       width: 100%;
       font-size: 14px;
       margin-right: 5px;
    }
`

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: 885px) {
       width: 50%;
    }
    @media (max-width: 650px) {
        width: 100%;
        flex-wrap: nowrap;
    }
    @media (max-width: 550px) {
        flex-wrap: wrap;
    }
`

export const DomainContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 885px) {
       margin-top: 10px;
    }
    @media (max-width: 650px) {
        margin-top: 0px;
    }
    @media (max-width: 550px) {
        margin-top: 10px;
    }
`

export const InputDomain = styled.input`
    display: flex;
    align-items: center;
    padding-left: 15px;
    margin-left: 10px;
    border: 1.5px solid gainsboro;
    border-radius: 15px;
    width: 180px;
    height: 50px;
    font-size: 16px;
    @media (max-width: 1150px) {
       width: 120px;
       height: 40px;
    }
    @media (max-width: 550px) {
        width: 120px;
        font-size: 14px;
        margin-left: 5px;
    }
`
export const SelectDomain = styled.div`
    display: flex;
    font-size: 16px;
    font-family: var(--font-sansMedium); 
    align-items: center;
    padding-left: 15px;
    margin-left: 5px;
    border: 1.5px solid gainsboro;
    border-radius: 15px;
    width: 180px;
    height: 50px;
    cursor: pointer;
    position: relative;
    @media (max-width: 1150px) {
       width: 140px;
       height: 45px;
    }
    @media (max-width: 550px) {
        width: 120px;
        font-size: 14px;
    }
`
export const DomainBox = styled.div`
    display: flex;
    font-size: 16px;
    background-color: white;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    box-shadow: 0px 2px 5px rgba(49,49,63,0.4);
    border-radius: 15px;
    width: 195px;
    position: absolute;
    top: ${props => props.$isClick ? 120 : 105}%;
    opacity: ${props => props.$isClick ? 1 : 0};
    pointer-events: ${props => props.$isClick ? 'auto' : 'none'};
    transition: all 0.3s ease;
    left: 0;
    margin-top: 2px;
    cursor: pointer;
    @media (max-width: 1150px) {
       width: 155px;
    }
    @media (max-width: 650px) {
       width: 155px;
    }
    @media (max-width: 550px) {
       width: 135px;
       font-size: 14px;
    }
`

export const DomainOption = styled.div`
    margin: 5px 0;
`

export const PhoneNum = styled.input`
    display: flex;
    align-items: center;
    padding-left: 15px;
    border: 1.5px solid gainsboro;
    border-radius: 15px;
    width: 100px;
    height: 50px;
    font-size: 16px;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    @media (max-width: 1150px) {
       width: 80px;
       height: 40px;
    }
    @media (max-width: 650px) {
       width: 22%;
       font-size: 14px;
    }
`

export const BodyTextarea = styled.textarea`
    resize: none;
    width: 73%;
    height: 200px;
    border: 1.5px solid gainsboro;
    border-radius: 15px;
    padding: 10px;
    font-size: 16px;
    @media (max-width: 650px) {
       width: 100%;
    }
`

export const AgreeBox = styled.input`
    appearance: none;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    border: 2px solid gainsboro;
    border-radius: 0.35rem;
    &:checked{
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 130% 130%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #0052A7;
    }
`

export const AgreeTextBox = styled.label`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-family: var(--font-sansMedium);
    @media (max-width: 600px) {
       font-size: 14px;
    }
`

export const AgreeButton = styled.div`
    margin-left: 15px;
    font-size: 14px;
    color: grey;
    font-family: var(--font-sansMedium);
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
    @media (max-width: 650px) {
       font-size: 12px;
    }
`

export const Submit = styled.div`
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    width: 280px;
    height: 60px;
    background-color: ${props => props.$isFilled ? '#0052A7' : '#E0E0E0'};
    pointer-events: ${props => props.$isFilled ? 'auto' : 'none'};
    transition: background-color 0.2s ease;
    cursor: pointer;
`