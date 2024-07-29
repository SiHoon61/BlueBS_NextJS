import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    SubColumnContainer,
    BodyText,
    SmallText,
    RedText,
    InquiryContainer,
    InquiryForm,
    KeyText,
    Triangle,
    InputBox,
    InputDomain,
    SelectDomain,
    DomainBox,
    DomainOption,
    PhoneNum,
    BodyTextarea,
    AgreeBox,
    AgreeTextBox,
    AgreeButton,
    Submit,
    EmailContainer,
    DomainContainer,
} from './style';


import ClassifyDropdown from './ClassifyDropdown';
import ModalPortal from '../../../modal/ModalPortal';
import AgreeModal from './AgreeModal';

const Inquiry = () => {
    const dropdownRef = useRef(null);
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [domain, setDomain] = useState('');
    const [visibleDomain, setVisibleDomain] = useState(false);
    const [isSelectDomain, setIsSelectDomain] = useState(0);
    const domainList = ['직접입력', 'gmail.com', 'naver.com', 'daum.net', 'nate.com', 'hanmail.net', 'hotmail.com']

    useEffect(() => {
        // 이벤트 리스너 설정: 바깥쪽 클릭 감지
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setVisibleDomain(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    const domainToggleDropdown = () => {
        setVisibleDomain(!visibleDomain);
    };

    //modal
    const [modalState, setModalState] = useState(false);
    const handleOpenModal = () => {
        setModalState(true);
    };
    const handleCloseModal = () => {
        setModalState(false);
    };


    //submit
    const [classifyData, setClassifyData] = useState('제품 관련 문의');
    const [firstNum, setFirstNum] = useState('');
    const [middleNum, setMiddleNum] = useState('');
    const [lastNum, setLastNum] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [isChecked, setIsChecked] = useState('');
    const [isFilled, setIsFilled] = useState(false);

    //유효성 검사
    const isEmpty = (value) => {
        if (typeof value === 'string') {
            return value.trim() !== '';
        }
        else if (typeof value === 'boolean') {
            return value === true;
        }
        return !value;
    };
    useEffect(() => {
        if ([classifyData, nameValue, emailValue, domain, firstNum, middleNum, lastNum, bodyText, isChecked].every(isEmpty)) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
    }, [classifyData, nameValue, emailValue, domain, firstNum, middleNum, lastNum, bodyText, isChecked])

    const sendEmail_1 = () => {
        const templateParams = {
            to_Email: 'okbbs2000@naver.com',
            user_classify: classifyData,
            user_name: nameValue,
            user_email: emailValue,
            user_domain: domain,
            user_firstNum: firstNum,
            user_middleNum: middleNum,
            user_lastNum: lastNum,
            user_bodyText: bodyText,
        };
        emailjs.send(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, templateParams, `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`).then(
            result => {
                alert("문의사항이 접수되었습니다. 감사합니다.");
                setNameValue('');
                setEmailValue('');
                setDomain('');
                setIsSelectDomain(0);
                setFirstNum('');
                setMiddleNum('');
                setLastNum('');
                setBodyText('');
                setIsChecked(false);
            },
            error => {
                console.log(error.text);
                alert("문의 접수에 실패했습니다. 전화 주시면 감사하겠습니다.");
            },
        );
    };
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Communication · 1:1 문의하기
                    <TitleMainText>
                        1:1 문의하기
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <SubColumnContainer>
                    <BodyText>
                        BlueBS에 궁금한 사항이 있으신가요?<br />
                        문의하실 내용이나 개선 의견을 남겨 주세요. 빠른 시일 내에 성심성의껏 답변 드리겠습니다.
                        <SmallText>
                            <RedText>*</RedText>표시 항목은 필수입력사항입니다.
                        </SmallText>
                    </BodyText>
                </SubColumnContainer>
                <InquiryContainer>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>문의 분류
                        </KeyText>
                        <ClassifyDropdown updateClassifyData={setClassifyData} />
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>성명
                        </KeyText>
                        <InputBox
                            type="text"
                            name="user_name"
                            value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>이메일
                        </KeyText>
                        <EmailContainer>
                            <InputBox
                                type="email"
                                value={emailValue}
                                onChange={(e) => setEmailValue(e.target.value)} />
                            @
                            <DomainContainer>
                                <InputDomain
                                    type="email"
                                    value={domain}
                                    onChange={(e) => setDomain(e.target.value)}
                                    placeholder={'직접 입력하기'}
                                />
                                <SelectDomain
                                    onClick={domainToggleDropdown}
                                    ref={dropdownRef}
                                >
                                    {domainList[isSelectDomain]}
                                    <Triangle $isClick={visibleDomain} />
                                    <DomainBox $isClick={visibleDomain}>
                                        {domainList.map((list, index) => (
                                            <DomainOption
                                                key={index}
                                                onClick={() => {
                                                    setIsSelectDomain(index);
                                                    const selectedDomain = index === 0 ? '' : domainList[index];
                                                    setDomain(selectedDomain);
                                                }}>
                                                {list}
                                            </DomainOption>
                                        ))}
                                    </DomainBox>
                                </SelectDomain>
                            </DomainContainer>
                        </EmailContainer>
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>연락처
                        </KeyText>
                        <PhoneNum
                            type="number"
                            pattern="\d*"
                            value={firstNum}
                            onChange={(e) => setFirstNum(e.target.value)}
                        />
                        &nbsp;&nbsp;-&nbsp;&nbsp;
                        <PhoneNum
                            type="number"
                            pattern="\d*"
                            value={middleNum}
                            onChange={(e) => setMiddleNum(e.target.value)} />
                        &nbsp;&nbsp;-&nbsp;&nbsp;
                        <PhoneNum
                            type="number"
                            pattern="\d*"
                            value={lastNum}
                            onChange={(e) => setLastNum(e.target.value)} />
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>내용
                        </KeyText>
                        <BodyTextarea
                            value={bodyText}
                            onChange={(e) => setBodyText(e.target.value)} />
                    </InquiryForm>
                    <InquiryForm>
                        <KeyText>
                            <RedText>*</RedText>약관 동의
                        </KeyText>
                        <AgreeTextBox>
                            <AgreeBox
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            개인정보 수집 및 이용에 동의합니다.
                        </AgreeTextBox>
                        <AgreeButton onClick={handleOpenModal}>
                            내용보기
                        </AgreeButton>
                    </InquiryForm>
                    <Submit onClick={() => {
                        sendEmail_1()
                    }}
                        $isFilled={isFilled}>
                        문의 접수
                    </Submit>
                </InquiryContainer>
                {modalState && (
                    <ModalPortal>
                        <AgreeModal onClose={handleCloseModal} show={modalState} />
                    </ModalPortal>
                )}
            </MainContainer>
        </>
    );
};

export default Inquiry;