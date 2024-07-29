import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MenuModal from './MenuModal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [headerStyle, setHeaderStyle] = useState("top");

    const router = useRouter();

    const navigate = (path) => {
        setIsModalOpen(false);
        router.push(path);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setHeaderStyle(currentScrollPos === 0 ? "top" : "scrolling");
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={`fixed w-full z-50 transition-all ${headerStyle === 'top' ? 'bg-transparent' : 'bg-white shadow-lg'} flex justify-between items-center h-20`}>
                <img
                    src={headerStyle === 'top' ? '/assets/whiteLogo.png' : '/assets/blueLogo.png'}
                    alt="logo"
                    className="h-14 ml-20 cursor-pointer"
                    onClick={() => navigate('/')}
                />
                <nav className="hidden md:flex space-x-8 mr-20">
                    <div className="relative group">
                        <div className="cursor-pointer">Company</div>
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/greeting')}>CEO 인사말</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/history')}>연혁</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/awards')}>인증 및 수상</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/laboratory')}>기업 부설 연구소</div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="cursor-pointer">Technology</div>
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/electroCatalyst')}>전기촉매필터</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/tower')}>전기촉매타워</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/filter')}>마이크로 여과필터</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/nanoBubble')}>울트라 나노버블</div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="cursor-pointer">Business</div>
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/purify')}>정수 분야</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/sewer')}>하 · 폐수 분야</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/agriculture')}>농업 분야</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/animalHusbandry')}>축산 & 폐수 분야</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/greenAlgae')}>녹조 분야</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/leachate')}>침출수 분야</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/monitoring')}>운영관리 분야</div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="cursor-pointer">Products</div>
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/drinkingPD')}>음용수/생활용수/담수화</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/sewerPD')}>하/폐수 재이용 시스템</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/agriculturePD')}>농업용수 FDA/MSF 여과기</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/animalHusbandryPD')}>축산분뇨/악취 저감</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/greenAlgaePD')}>녹조/저수지 복원 및 유지</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/leachatePD')}>고농도 침출수 처리</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/aIWaterSystemPD')}>AI 스마트 물 관리 시스템</div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="cursor-pointer">Communication</div>
                        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/inquiry')}>1:1 문의하기</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/newsRoom')}>홍보자료실</div>
                            <div className="p-4 cursor-pointer" onClick={() => navigate('/map')}>오시는 길</div>
                        </div>
                    </div>
                </nav>
                <img
                    src={headerStyle === 'top' ? '/assets/Home/whiteMenu.svg' : '/assets/Home/blackMenu.svg'}
                    alt="menu"
                    className="h-8 mr-8 cursor-pointer md:hidden"
                    onClick={() => setIsModalOpen(true)}
                />
            </div>
            <MenuModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Header;
