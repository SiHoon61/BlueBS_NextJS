import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

//style
import {
    Container,
    WhiteLogo,
    BlueLogo,
    IndexContainer,
    IndexLI,
    IndexUL,
    EmptyBox,
    HoverBox,
    TextTextBox,
    WhiteMenu,
    BlackMenu,
} from './style';

//modal
import ModalPortal from '../../modal/ModalPortal';
import MenuModal from '../../modal/MenuModal/MenuModal';

const Header = () => {
    //modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    //navigation
    const router = useRouter();
    const goHome = () => {
        router.push("/");
    }
    const goCeoGreeting = () => {
        router.push("/Company/Greeting");
    }
    const goHistory = () => {
        router.push("/Company/History");
    }
    const goAwards = () => {
        router.push("/Company/Awards");
    }
    const goLaboratory = () => {
        router.push("/Company/Laboratory");
    }
    const goElectroCatalyst = () => {
        router.push("/Technology/ElectroCatalyst");
    }
    const goTower = () => {
        router.push("/Technology/Tower");
    }
    const goFilter = () => {
        router.push("/Technology/Filter");
    }
    const goNanoBubble = () => {
        router.push("/Technology/NanoBubble");
    }
    const goPurify = () => {
        router.push("/Business/Purify");
    }
    const goSewer = () => {
        router.push("/Business/Sewer");
    }
    const goAgriculture = () => {
        router.push("/Business/Agriculture");
    }
    const goAnimalHusbandry = () => {
        router.push("/Business/AnimalHusbandry");
    }
    const goGreenAlgae = () => {
        router.push("/Business/GreenAlgae");
    }
    const goLeachate = () => {
        router.push("/Business/Leachate");
    }
    const goMonitoring = () => {
        router.push("/Business/Monitoring");
    }
    const goDrinkingPD = () => {
        router.push("/Products/Drinking");
    }
    const goSewerPD = () => {
        router.push("/Products/Sewer");
    }
    const goAgriculturePD = () => {
        router.push("/Products/Agriculture");
    }
    const goAnimalHusbandryPD = () => {
        router.push("/Products/AnimalHusbandry");
    }
    const goGreenAlgaePD = () => {
        router.push("/Products/GreenAlgae");
    }
    const goLeachatePD = () => {
        router.push("/Products/Leachate");
    }
    const goAIWaterSystemPD = () => {
        router.push("/Products/AIWaterSystem");
    }
    const goNewsRoom = () => {
        router.push("/Communication/NewsRoom");
    }
    const goMap = () => {
        router.push("/Communication/MapWay");
    }
    const goInquiry = () => {
        router.push("/Communication/Inquiry");
    }

    //마우스 호버
    const [companyHovered, setCompanyHovered] = useState(false);
    const [technologyHovered, setTechnologyHovered] = useState(false);
    const [businessHovered, setBusinessHovered] = useState(false);
    const [productsHovered, setProductsHovered] = useState(false);
    const [communicationHovered, setCommunicationHovered] = useState(false);


    //스크롤 감지
    const [headerStyle, setHeaderStyle] = useState("top");
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if (currentScrollPos === 0) {
                setHeaderStyle("top");
            } else if (currentScrollPos > 50) {
                setHeaderStyle("scrolling");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <>
            <Container $state={headerStyle}>
                {headerStyle === 'top' ? <WhiteLogo onClick={goHome}></WhiteLogo> : <BlueLogo onClick={goHome}></BlueLogo>}
                <IndexContainer>
                    <IndexUL>
                        <IndexLI onMouseEnter={() => setCompanyHovered(true)}
                            onMouseLeave={() => setCompanyHovered(false)}
                        >Company
                            <HoverBox
                                $isHovered={companyHovered}
                                $width={140}>
                                <TextTextBox onClick={goCeoGreeting}>CEO 인사말</TextTextBox>
                                <TextTextBox onClick={goHistory}>연혁</TextTextBox>
                                <TextTextBox onClick={goAwards}>인증 및 수상</TextTextBox>
                                <TextTextBox onClick={goLaboratory}>기업 부설 연구소</TextTextBox>
                            </HoverBox>
                        </IndexLI>
                        <IndexLI onMouseEnter={() => setTechnologyHovered(true)}
                            onMouseLeave={() => setTechnologyHovered(false)}>Technology
                            <HoverBox
                                $isHovered={technologyHovered}
                                $width={160}>
                                <TextTextBox onClick={goElectroCatalyst}>전기촉매필터</TextTextBox>
                                <TextTextBox onClick={goTower}>전기촉매타워</TextTextBox>
                                <TextTextBox onClick={goFilter}>마이크로 여과필터</TextTextBox>
                                <TextTextBox onClick={goNanoBubble}>울트라 나노버블</TextTextBox>
                            </HoverBox>
                        </IndexLI>
                        <IndexLI onMouseEnter={() => setBusinessHovered(true)}
                            onMouseLeave={() => setBusinessHovered(false)}>Business
                            <HoverBox
                                $isHovered={businessHovered}
                                $width={145}>
                                <TextTextBox onClick={goPurify}>정수 분야</TextTextBox>
                                <TextTextBox onClick={goSewer}>하 · 폐수 분야</TextTextBox>
                                <TextTextBox onClick={goAgriculture}>농업 분야</TextTextBox>
                                <TextTextBox onClick={goAnimalHusbandry}>축산 & 폐수 분야</TextTextBox>
                                <TextTextBox onClick={goGreenAlgae}>녹조 분야</TextTextBox>
                                <TextTextBox onClick={goLeachate}>침출수 분야</TextTextBox>
                                <TextTextBox onClick={goMonitoring}>운영관리 분야</TextTextBox>
                            </HoverBox>
                        </IndexLI>
                        <IndexLI onMouseEnter={() => setProductsHovered(true)}
                            onMouseLeave={() => setProductsHovered(false)}>Products
                            <HoverBox
                                $isHovered={productsHovered}
                                $width={240}>
                                <TextTextBox onClick={goDrinkingPD}>음용수/생활용수/담수화</TextTextBox>
                                <TextTextBox onClick={goSewerPD}>하/폐수 재이용 시스템</TextTextBox>
                                <TextTextBox onClick={goAgriculturePD}>농업용수 FDA/MSF 여과기</TextTextBox>
                                <TextTextBox onClick={goAnimalHusbandryPD}>축산분뇨/악취 저감</TextTextBox>
                                <TextTextBox onClick={goGreenAlgaePD}>녹조/저수지 복원 및 유지</TextTextBox>
                                <TextTextBox onClick={goLeachatePD}>고농도 침출수 처리</TextTextBox>
                                <TextTextBox onClick={goAIWaterSystemPD}>AI 스마트 물 관리 시스템</TextTextBox>
                            </HoverBox>
                        </IndexLI>
                        <IndexLI onMouseEnter={() => setCommunicationHovered(true)}
                            onMouseLeave={() => setCommunicationHovered(false)}>Communication
                            <HoverBox
                                $isHovered={communicationHovered}
                                $width={140}>
                                <TextTextBox onClick={goInquiry}>1:1 문의하기</TextTextBox>
                                <TextTextBox onClick={goNewsRoom}>홍보자료실</TextTextBox>
                                <TextTextBox onClick={goMap}>오시는 길</TextTextBox>
                            </HoverBox>
                        </IndexLI>
                    </IndexUL>
                </IndexContainer>
                <EmptyBox />
                {headerStyle === 'top' ? <WhiteMenu onClick={openModal}></WhiteMenu> : <BlackMenu onClick={openModal}></BlackMenu>}
            </Container>
            <ModalPortal>
                <MenuModal isOpen={isModalOpen} onClose={closeModal} />
            </ModalPortal>
        </>
    );
};

export default Header;
