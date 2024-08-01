import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
//img
const close = '/assets/Business/close.svg'
const blackLogo = '/assets/blackLogo.png';

//style
import {
    Modal,
    Content,
    CloseButton,
    Date,
    ExistImg,
    Title,
    PostContainer,
    InquiryForm,
    InquiryInputForm,
    FileText,
    KeyText,
    InputText,
    InputBox,
    BodyTextarea,
    Submit,
    InputContainer,
    DeleteButton,
} from './style';

const FixModal = ({ show, onClose, content }) => {
    const [postTitle, setPostTitle] = useState('');
    const [postWriter, setPostWriter] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postPDF, setPostPDF] = useState(null);
    const [postPDFName, setPostPDFName] = useState('');
    const [postJPG, setPostJPG] = useState(null);
    const [keepPDF, setKeepPDF] = useState(true);
    const [keepJPG, setKeepJPG] = useState(true);
    const [existPDF, setExistPDF] = useState('');
    const [deleteJPG, setDeleteJPG] = useState(false);

    useEffect(() => {
        document.body.style.cssText = `
            position: fixed; 
            top: -${window.scrollY}px;
            overflow-y: scroll;
            width: 100%;`;
        const handleFetchPost = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/reference?id=${content[0]}`);
                console.log(response.data.current);
                setPostTitle(response.data.current.title);
                setPostWriter(response.data.current.writer);
                setPostContent(response.data.current.content);
                setExistPDF(response.data.current.pdfName);
            } catch (err) {
                setPostTitle(null);
                console.error('Error fetching post:', err);
            }
        };
        handleFetchPost();
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };

    }, [content[0]]);

    //blob으로 변경
    const handleFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const name = e.target.name;
        console.log(e.target.value);
        if (e.target.files.length > 0) {
            if (name === 'pdf') {
                setPostPDF(file);
                setPostPDFName(e.target.files[0].name);
                setKeepPDF('');
            } else if (name === 'jpg') {
                setPostJPG(file);
                setKeepJPG('');
            }
        }
    };

    //서버로 전송 
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('title', postTitle);
        formData.append('writer', postWriter);
        formData.append('content', postContent);
        formData.append('jpg', postJPG);
        formData.append('pdf', postPDF);
        formData.append('pdfName', postPDFName);
        formData.append('keepPDF', keepPDF);
        formData.append('keepJPG', keepJPG);
        setPostTitle('');
        setPostWriter('');
        setPostContent('');
        setPostJPG(null);
        setPostPDF(null);

        try {
            const response = await axios.patch(`${process.env.REACT_APP_SERVER_URL}/fixref?id=${content[0]}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            alert('수정이 완료되었습니다');
            onClose(content[0]);
        } catch (error) {
            console.error('Error fix file:', error);
        }
    };

    //모달 관련 ref
    const contentRef = useRef(null);
    const handleClickOutside = (event) => {
        if (contentRef.current && !contentRef.current.contains(event.target)) {
            onClose(); // 클릭된 영역이 Content 밖이라면 모달 닫기 함수 호출
        }
    };
    return (
        <>
            <Modal onClick={handleClickOutside} $show={show}>
                <Content ref={contentRef} $show={show}>
                    <Title>
                        게시글 수정
                    </Title>
                    <PostContainer>
                        <InquiryForm>
                            <KeyText>
                                제목
                            </KeyText>
                            <InputBox
                                type="text"
                                name="user_name"
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                            />
                        </InquiryForm>
                        <InquiryForm>
                            <KeyText>
                                작성자
                            </KeyText>
                            <InputBox
                                type="text"
                                name="user_name"
                                value={postWriter}
                                onChange={(e) => setPostWriter(e.target.value)}
                            />
                        </InquiryForm>
                        <InquiryForm>
                            <KeyText>
                                본문
                            </KeyText>
                            <BodyTextarea
                                value={postContent}
                                onChange={(e) => setPostContent(e.target.value)}
                            />
                        </InquiryForm>

                        <InquiryInputForm>
                            <InputContainer>
                                <InputText>
                                    첨부파일변경(PDF)
                                </InputText>
                                <input
                                    type="file"
                                    name="pdf"
                                    multiple
                                    onChange={handleFileChange}
                                />
                            </InputContainer>       
                            <InputContainer>
                                <FileText>
                                    [기존 파일]: {existPDF ? existPDF : '없음'}
                                </FileText>
                                <DeleteButton onClick={() => {
                                    setExistPDF('');
                                    setKeepPDF('');
                                }}>
                                    기존 파일 삭제
                                </DeleteButton>
                            </InputContainer>
                        </InquiryInputForm>
                        <InquiryInputForm>
                            <InputContainer>
                                <InputText>
                                    사진 변경
                                </InputText>
                                <input
                                    type="file"
                                    name="jpg"
                                    multiple
                                    onChange={(e) => handleFileChange(e)}
                                />
                            </InputContainer>
                            <InputContainer>
                                [기존 사진] <ExistImg src={deleteJPG ? blackLogo : `data:image/jpeg;base64,${content[1]}`
                                }
                                    alt="dataimg" />
                                <DeleteButton onClick={() => {
                                    setDeleteJPG(true);
                                    setKeepJPG('');
                                }}>
                                    기존 사진 삭제
                                </DeleteButton>
                            </InputContainer>
                        </InquiryInputForm>

                        <InquiryForm>
                            <Submit onClick={() => {
                                handleFileUpload();
                            }}>
                                수정하기
                            </Submit>
                        </InquiryForm>

                    </PostContainer>
                    <CloseButton
                        src={close}
                        alt="close"
                        onClick={onClose}
                    />
                </Content>
            </Modal>
        </>
    );
};

export default FixModal;