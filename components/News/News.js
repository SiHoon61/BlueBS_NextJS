import React, { useState } from 'react';
import Image from 'next/image';

//img
import newsImg1 from '../../public/assets/Communication/news1.png';
import newsImg2 from '../../public/assets/Communication/news2.png';
import newsImg3 from '../../public/assets/Communication/news3.png';

//modal
import NewsModal from './NewsModal';
import ModalPortal from '../../modal/ModalPortal';

const News = () => {
    const [modalState, setModalState] = useState(false);
    const [modalSelect, setModalSelect] = useState(0);

    const handleOpenModal = (index) => {
        setModalSelect(index);
        setModalState(true);
    };

    const handleCloseModal = () => {
        setModalState(false);
    };

    const newsJson = [
        {
            title: "농림축산식품 과학기술대전 장관상 수상",
            date: "2023.12.30",
            body: "전기촉매와 여과필터 기술을 활용해 녹조, 부유물, 탁도를 신속하게 제거하며 맑은 농업용수를 공급하는 농업환경 기술자로서, 수질 관리 및 특히 물 재이용 고도처리 분야에서 선도적인 기술을 개발해왔습니다.신기술, 녹색기술, 혁신제품, 품질인증 등 기술 연구개발에 대한 깊은 사명감을 가지고 업무를 수행한 공로로 과학표창을 수여받았습니다.",
            src: newsImg1,
            alt: 'newsImg'
        },
        {
            title: "블루비에스와 푸드클로버 기술 교류 협약 체결",
            date: "2022.01.12",
            body: "혁신적인 스마트 팜 사업, 'Tya- LAND'의 발전을 목표로 ㈜블루비에스와 ㈜푸드클로버가 기술 협력과 사업화 전략을 공유하기 위한 중요한 협약을 체결했다고 발표했습니다. 이 협약은 양사 간의 긴밀한 업무 협력을 통해 스마트 팜 사업의 생산 시설에 필요한 기술 개발 및 사업화를 진행하기 위한 것입니다. 협약의 주요 목적은 스마트 팜 'Tya - LAND' 사업을 통해 기업 간 상호 이익을 증진하고, 국내외 시장에서 네잎클로버의 판매를 성공적으로 추진하여 기업 가치를 극대화하는 것입니다. 협력 분야에는 Tya-LAND 사업의 네잎클로버 생산 공정, 시공, 운영 연계 사업화 정보 공유, 현장 발굴 및 적용 협력, 그리고 기술 교류에 필요한 기타 사항들이 포함됩니다. ㈜블루비에스와 ㈜푸드클로버는 이번 협약이 'Tya - LAND' 스마트 팜 사업의 성공적인 추진을 위한 기반을 마련할 것으로 기대하고 있습니다.",
            src: newsImg3,
            alt: 'newsImg'
        },
        {
            title: "블루비에스, 이상기후 속 안정적인 물 공급을 위한 해법",
            date: "2017.04.20",
            body: "물은 국민 누구에게나 공평해야한다. 하지만 지역적 특성과 가뭄, 기후 변화 등에 따라 맑은 물을 안정적으로 공급하기 어려워지고 있다. 특히 최근 15~20년간 강우의 패턴이 기간, 공간, 강도적인 차이를 보이며 댐이나 저수지의 적정규모와 이용방법에 큰 영향을 미치고 있다. 블루비에스 홍민 대표가 초고도 처리기술에 대해 발표하고있다.\n그렇다면 이러한 영향에 우리는 어떻게 대처해야할까? ㈜블루비에스는 지난 20일 국회에서 진행된 ‘4차 산업혁명과 물(순환) 산업’에서 ‘이상기후 현상으로 인한 물 부족에 대처하는 초고도 처리기술’을 주제로 발표하며 질문에 대한 답을 줬다.이번 세미나는 김삼화 국회의원실, 환경미디어·미래는우리손안에, 상하수도시민환경네트워크가 공동으로 주최하고 환경부, 한국환경정책평가연구원, 환경산업기술원, 한국상하수도협회, 대한상하수도학회 하폐수처리기술개발사업단이 후원했고 각 기관 및 지자체.업계에서 200여 명이 참가해 큰 관심을 보였다. 이날 ㈜블루비에스 홍민 대표는 가뭄지역에 효과적으로 대체 수자원을 개발하는 기술로 짠물과 하수같이 사용할 수 없는 물을 맑은 물로 바꾸는 재이용 담수화 기술을 소개했다.더불어 녹조의 제거는 물론 물리적으로 녹조의 원인을 물에서 꺼내는 고액 분리 기술도 선보였다.",
            src: newsImg2,
            alt: 'newsImg'
        },
    ];

    return (
        <>
            <div className="flex flex-wrap justify-center">
                {newsJson.map((list, index) => (
                    <div key={index} className="flex flex-col w-1/3 aspect-square rounded-lg mb-12 shadow-md hover:brightness-75 transition filter cursor-pointer p-4" onClick={() => handleOpenModal(index)}>
                        <Image src={list.src} alt="newsImg" className="w-full rounded-t-lg" />
                        <div className="mt-4 mb-8 text-lg font-medium">
                            {list.title}
                        </div>
                        <div className="absolute bottom-4 left-4 text-gray-500 text-sm">
                            {list.date}
                        </div>
                    </div>
                ))}
            </div>
            {modalState && (
                <ModalPortal>
                    <NewsModal onClose={handleCloseModal} show={modalState} content={newsJson[modalSelect]} />
                </ModalPortal>
            )}
        </>
    );
};

export default News;
