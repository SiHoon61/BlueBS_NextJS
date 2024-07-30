import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
    MenuContainer,
    CloseButton,
    MainContainer,
    MenuBox,
    MenuTitleContainer,
    MenuTitle,
    PlusButton,
    MenuUl,
    MenuLi,
} from './style';

//img
const close = '/assets/Business/whiteClose.png';

const MenuModal = ({ isOpen, onClose }) => {
    const [activeMenu, setActiveMenu] = useState(null); // 활성화된 메뉴의 ID 상태
    const toggleMenu = (menuId) => {
        if (activeMenu === menuId) {
            // 이미 활성화된 메뉴를 다시 클릭하면 모든 메뉴를 닫음
            setActiveMenu(null);
        } else {
            // 다른 메뉴 클릭 시 해당 메뉴를 활성화
            setActiveMenu(menuId);
        }
    };

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
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <MenuContainer $isOpen={isOpen}>
            <CloseButton
                src={close}
                alt="close"
                onClick={onClose}
            />
            <MainContainer>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Company')}>
                        <MenuTitle>Company</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Company"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Company"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goCeoGreeting();
                        }
                        }>
                            CEO인사말
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goHistory();
                        }
                        }>
                            연혁
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAwards();
                        }
                        }>
                            인증 및 수상
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goLaboratory();
                        }
                        }>
                            기업부설연구소
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Technology')}>
                        <MenuTitle>Technology</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Technology"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Technology"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goElectroCatalyst();
                        }
                        }>
                            전기촉매필터
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goTower();
                        }
                        }>
                            전기촉매타워
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goFilter();
                        }
                        }>
                            마이크로 여과필터
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goNanoBubble();
                        }
                        }>
                            울트라 나노버블
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Business')}>
                        <MenuTitle>Business</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Business"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Business"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goPurify();
                        }
                        }>
                            정수 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goSewer();
                        }
                        }>
                            하 · 폐수 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAgriculture();
                        }
                        }>
                            농업 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAnimalHusbandry();
                        }
                        }>
                            축산 & 폐수 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goGreenAlgae();
                        }
                        }>
                            녹조 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goLeachate();
                        }
                        }>
                            침출수 분야
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goMonitoring();
                        }
                        }>
                            운영관리 분야
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Products')}>
                        <MenuTitle>Products</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Products"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Products"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goDrinkingPD();
                        }
                        }>
                            음용수/생활용수/담수화
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goSewerPD();
                        }
                        }>
                            하/폐수 재이용 시스템
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAgriculturePD();
                        }
                        }>
                            농업용수 FDA/MSF 여과기
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAnimalHusbandryPD();
                        }
                        }>
                            축산분뇨/악취 저감
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goGreenAlgaePD();
                        }
                        }>
                            녹조/저수지 복원 및 유지
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goLeachatePD();
                        }
                        }>
                            고농도 침출수 처리
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goAIWaterSystemPD();
                        }
                        }>
                            AI 스마트 물 관리 시스템
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
                <MenuBox>
                    <MenuTitleContainer onClick={() => toggleMenu('Communication')}>
                        <MenuTitle>Communication</MenuTitle>
                        <PlusButton $isactive={activeMenu === "Communication"} />
                    </MenuTitleContainer>
                    <MenuUl $activeMenu={activeMenu === "Communication"}>
                        <MenuLi onClick={() => {
                            onClose();
                            goInquiry();
                        }
                        }>
                            1:1 문의하기
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goNewsRoom();
                        }
                        }>
                            홍보자료실
                        </MenuLi>
                        <MenuLi onClick={() => {
                            onClose();
                            goMap();
                        }
                        }>
                            오시는길
                        </MenuLi>
                    </MenuUl>
                </MenuBox>
            </MainContainer>
        </MenuContainer>
    );
};

export default MenuModal;
