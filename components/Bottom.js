import React from 'react';

const Bottom = () => {
    return (
        <div className="mt-24 flex w-full h-48 bg-gray-900 justify-center overflow-hidden md:justify-start md:h-56">
            <img
                src="/assets/whiteLogo.png"
                alt="흑백로고"
                className="m-auto h-24 md:m-auto md:h-20 lg:hidden md:ml-20"
            />
            <div className="text-white flex flex-col justify-center">
                <div className="text-lg mb-4 px-5 md:ml-5 md:mb-0 lg:text-lg">㈜블루비에스</div>
                <ul className="flex w-96 list-none text-lg px-5 md:ml-5 md:text-base md:flex-col lg:w-full">
                    <li className="px-5 md:ml-5">대표: 홍 민</li>
                    <li className="px-5 md:ml-5">주소: 경기도 수원시 권선구 서호로 89 서울대 농생명과학센터 2동 202호</li>
                    <li className="px-5 md:ml-5">전화번호: 031-292-1447</li>
                    <li className="px-5 md:ml-5">FAX: 031-292-1448</li>
                </ul>
            </div>
        </div>
    );
};

export default Bottom;
