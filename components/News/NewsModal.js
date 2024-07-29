import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import close from '../../public/assets/Business/close.svg';

const NewsModal = ({ show, onClose, content }) => {
    const contentRef = useRef(null);

    const handleClickOutside = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            onClose(); // 클릭된 영역이 Content 밖이라면 모달 닫기 함수 호출
        }
    };

    useEffect(() => {
        if (show) {
            document.body.style.cssText = `
                position: fixed; 
                top: -${window.scrollY}px;
                overflow-y: scroll;
                width: 100%;`;
        } else {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        }

        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, [show]);

    return (
        <>
            {show && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleClickOutside}>
                    <div ref={contentRef} className="relative bg-white w-full max-w-3xl h-3/4 max-h-[70%] p-10 overflow-y-scroll transform transition-all duration-300">
                        <button className="absolute top-4 right-4" onClick={onClose}>
                            <Image src={close} alt="close" width={40} height={40} />
                        </button>
                        <hr className="w-full h-1 bg-black" />
                        <div className="mt-4 text-3xl font-bold">{content.title}</div>
                        <div className="mt-2 text-gray-500">{content.date}</div>
                        <div className="mt-4">
                            <Image src={content.src} alt="newsImg" width={800} height={600} className="w-4/5 h-auto mx-auto" />
                        </div>
                        <div className="mt-4 text-lg leading-8">{content.body}</div>
                        <hr className="w-full h-1 bg-black mt-4" />
                    </div>
                </div>
            )}
        </>
    );
};

export default NewsModal;
