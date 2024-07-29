import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ModalPortal from '../modal/ModalPortal';

const MenuModal = ({ isOpen, onClose }) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const router = useRouter();

    const toggleMenu = (menuId) => {
        setActiveMenu(activeMenu === menuId ? null : menuId);
    };

    const navigateTo = (path) => {
        onClose();
        router.push(path);
    };

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <ModalPortal>
            <div className="fixed inset-0 z-50 bg-black bg-opacity-70 transition-opacity duration-300">
                <img
                    src="/assets/Business/whiteClose.png"
                    alt="close"
                    className="absolute top-4 right-4 w-12 h-12 cursor-pointer"
                    onClick={onClose}
                />
                <div className="flex flex-wrap justify-start p-8 pt-16">
                    <div className="m-6 text-white">
                        <div className="flex items-center cursor-pointer" onClick={() => toggleMenu('Company')}>
                            <div className="text-2xl font-semibold">Company</div>
                            <div className={`ml-4 transform transition-transform ${activeMenu === 'Company' ? 'rotate-45' : 'rotate-0'}`}>
                                <img src="/assets/Home/whitePlus.svg" alt="plus" className="w-6 h-6" />
                            </div>
                        </div>
                        <ul className={`transition-all duration-500 overflow-hidden ${activeMenu === 'Company' ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/greeting')}>CEO인사말</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/history')}>연혁</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/awards')}>인증 및 수상</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/laboratory')}>기업부설연구소</li>
                        </ul>
                    </div>
                    <div className="m-6 text-white">
                        <div className="flex items-center cursor-pointer" onClick={() => toggleMenu('Technology')}>
                            <div className="text-2xl font-semibold">Technology</div>
                            <div className={`ml-4 transform transition-transform ${activeMenu === 'Technology' ? 'rotate-45' : 'rotate-0'}`}>
                                <img src="/assets/Home/whitePlus.svg" alt="plus" className="w-6 h-6" />
                            </div>
                        </div>
                        <ul className={`transition-all duration-500 overflow-hidden ${activeMenu === 'Technology' ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/electroCatalyst')}>전기촉매필터</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/tower')}>전기촉매타워</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/filter')}>마이크로 여과필터</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/nanoBubble')}>울트라 나노버블</li>
                        </ul>
                    </div>
                    <div className="m-6 text-white">
                        <div className="flex items-center cursor-pointer" onClick={() => toggleMenu('Business')}>
                            <div className="text-2xl font-semibold">Business</div>
                            <div className={`ml-4 transform transition-transform ${activeMenu === 'Business' ? 'rotate-45' : 'rotate-0'}`}>
                                <img src="/assets/Home/whitePlus.svg" alt="plus" className="w-6 h-6" />
                            </div>
                        </div>
                        <ul className={`transition-all duration-500 overflow-hidden ${activeMenu === 'Business' ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/purify')}>정수 분야</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/sewer')}>하 · 폐수 분야</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/agriculture')}>농업 분야</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/animalHusbandry')}>축산 & 폐수 분야</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/greenAlgae')}>녹조 분야</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/leachate')}>침출수 분야</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/monitoring')}>운영관리 분야</li>
                        </ul>
                    </div>
                    <div className="m-6 text-white">
                        <div className="flex items-center cursor-pointer" onClick={() => toggleMenu('Products')}>
                            <div className="text-2xl font-semibold">Products</div>
                            <div className={`ml-4 transform transition-transform ${activeMenu === 'Products' ? 'rotate-45' : 'rotate-0'}`}>
                                <img src="/assets/Home/whitePlus.svg" alt="plus" className="w-6 h-6" />
                            </div>
                        </div>
                        <ul className={`transition-all duration-500 overflow-hidden ${activeMenu === 'Products' ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/drinkingPD')}>음용수/생활용수/담수화</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/sewerPD')}>하/폐수 재이용 시스템</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/agriculturePD')}>농업용수 FDA/MSF 여과기</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/animalHusbandryPD')}>축산분뇨/악취 저감</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/greenAlgaePD')}>녹조/저수지 복원 및 유지</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/leachatePD')}>고농도 침출수 처리</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/aIWaterSystemPD')}>AI 스마트 물 관리 시스템</li>
                        </ul>
                    </div>
                    <div className="m-6 text-white">
                        <div className="flex items-center cursor-pointer" onClick={() => toggleMenu('Communication')}>
                            <div className="text-2xl font-semibold">Communication</div>
                            <div className={`ml-4 transform transition-transform ${activeMenu === 'Communication' ? 'rotate-45' : 'rotate-0'}`}>
                                <img src="/assets/Home/whitePlus.svg" alt="plus" className="w-6 h-6" />
                            </div>
                        </div>
                        <ul className={`transition-all duration-500 overflow-hidden ${activeMenu === 'Communication' ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/inquiry')}>1:1 문의하기</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/newsRoom')}>홍보자료실</li>
                            <li className="mt-4 cursor-pointer" onClick={() => navigateTo('/map')}>오시는 길</li>
                        </ul>
                    </div>
                </div>
            </div>
        </ModalPortal>
    );
};

export default MenuModal;
