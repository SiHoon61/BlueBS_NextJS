import React, { useState, useEffect, useRef } from 'react';

import {
    Classify,
    Triangle,
    ClassifyBox,
    ClassifyOption,
} from '../../../styles/Communication/Inquiry/style'

const ClassifyDropdown = ({ updateClassifyData }) => {
    const [visibleClassify, setVisibleClassify] = useState(false);
    const dropdownRef = useRef(null);
    const [isSelectClassify, setIsSelectClassify] = useState(0);
    const classifys = ['제품 관련 문의', '불편 사항 문의', '제품/서비스 제안', '기타 문의'];

    useEffect(() => {
        // 이벤트 리스너 설정: 바깥쪽 클릭 감지
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setVisibleClassify(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const classifyToggleDropdown = () => {
        setVisibleClassify(!visibleClassify);
    };

    return (
        <>
            <Classify
                onClick={classifyToggleDropdown}
                ref={dropdownRef}>
                {classifys[isSelectClassify]}
                <Triangle $isClick={visibleClassify} />
                <ClassifyBox $isClick={visibleClassify}>
                    {classifys.map((list, index) => (
                        <ClassifyOption
                            key={index}
                            onClick={() => {
                                setIsSelectClassify(index);
                                updateClassifyData(classifys[index]);
                            }}>
                            {list}
                        </ClassifyOption>
                    ))}
                </ClassifyBox>
            </Classify>
        </>
    );
};

export default ClassifyDropdown;