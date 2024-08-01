import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

//style
import {
    Title,
    PostContainer,
    InquiryForm,
    KeyText,
    InputBox,
    BodyTextarea,
    Submit,
    RedText,
    MedianLine,
    DataBox,
    DataDate,
    DataImgs,
    DataTitle,
    BodyContainer,
    BodyHr,
    TopTitle,
    TopSubTitle,
    GreyTitle,
    BottomHr,
    BodyText,
    AttachedBox,
    AttachedFile,
    NavigateBox,
    NavigateButton,
    NullText,
} from './style'

const samplejpg = '/assets/blackLogo.png';

const AdminPost = () => {
    const router = useRouter();
    const [postTitle, setPostTitle] = useState('');
    const [postWriter, setPostWriter] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postPDF, setPostPDF] = useState(null);
    const [postPDFName, setPostPDFName] = useState('');
    const [postJPG, setPostJPG] = useState(null);
    const [jpgPath, setJpgPath] = useState(null);
    const today = new Date();
    const formattedDate = `${today.getFullYear()}.${today.getMonth() + 1}.${today.getDate()}`;
    const jpgInputRef = useRef(null);
    const pdfInputRef = useRef(null);

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await axios.get('/api/verifyToken', {
                    withCredentials: true // 쿠키를 포함하여 요청
                });
                console.log(response.data);
            } catch (error) {
                console.error('Token verification failed:', error);
                router.push('/admin');
            }
        };

        verifyToken();
    }, []);


    //blob으로 변경
    const handleFileChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const name = e.target.name;
        if (e.target.files.length > 0) {
            if (name === 'pdf') {
                setPostPDF(file);
                setPostPDFName(e.target.files[0].name);
            } else if (name === 'jpg') {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setJpgPath(reader.result);
                };
                reader.readAsDataURL(file);
                setPostJPG(file);
            }
        }
    };

    //서버로 전송 
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('title', postTitle);
        formData.append('writer', postWriter);
        formData.append('content', postContent);
        formData.append('date', formattedDate);
        formData.append('jpg', postJPG);
        formData.append('pdf', postPDF);
        formData.append('pdfName', postPDFName);
        setPostTitle('');
        setPostWriter('');
        setPostContent('');
        setPostJPG(null);
        setPostPDFName('');
        setPostPDF(null);
        setJpgPath('');
        if (jpgInputRef.current && pdfInputRef.current) {
            jpgInputRef.current.value = '';
            pdfInputRef.current.value = '';
        }
        try {
            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('업로드 완료')
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };


    return (
        <>
            <PostContainer>
                <Title>
                    게시판 글 작성
                </Title>
                <InquiryForm>
                    <KeyText>
                        <RedText>*</RedText>제목
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
                        <RedText>*</RedText>작성자
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
                        <RedText>*</RedText>본문
                    </KeyText>
                    <BodyTextarea
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                </InquiryForm>

                <InquiryForm>
                    <KeyText>
                        첨부파일(PDF)
                    </KeyText>
                    <input
                        type="file"
                        name="pdf"
                        multiple
                        ref={jpgInputRef}
                        onChange={handleFileChange}
                    />
                </InquiryForm>
                <InquiryForm>
                    <KeyText>
                        썸네일 사진
                    </KeyText>
                    <input
                        type="file"
                        name="jpg"
                        multiple
                        ref={pdfInputRef}
                        onChange={(e) => handleFileChange(e)}
                    />
                </InquiryForm>
                <Submit onClick={handleFileUpload}>
                    업로드
                </Submit>
                <MedianLine />
            </PostContainer>

            <PostContainer>
                <Title>
                    게시물 사진 미리보기
                </Title>
                <DataBox>
                    <DataImgs
                        src={jpgPath ? jpgPath : samplejpg}
                        alt="img"
                    />
                    <DataTitle>
                        {postTitle}
                    </DataTitle>
                    <DataDate>
                        {formattedDate}
                    </DataDate>
                </DataBox>
                <MedianLine />
            </PostContainer>

            <PostContainer>
                <Title>
                    게시물 미리보기
                </Title>

                <BodyContainer>
                    <BodyHr />
                    <TopTitle>
                        {postTitle}
                        <TopSubTitle>
                            작성자
                            <GreyTitle>
                                {postWriter}
                            </GreyTitle>
                            작성일
                            <GreyTitle>
                                {formattedDate}
                            </GreyTitle>
                        </TopSubTitle>
                    </TopTitle>
                    <BottomHr />
                    <BodyText>
                        {postContent}
                    </BodyText>
                    {postPDFName !== '' ? <AttachedBox>
                        첨부파일
                        <AttachedFile>
                            {postPDFName}
                        </AttachedFile>
                    </AttachedBox> : <></>}
                    <BodyHr />
                    <NavigateBox>
                        <NavigateButton>
                            이전 글
                            <NullText>
                                이전 글이 없습니다.
                            </NullText>
                        </NavigateButton>
                        <BottomHr />
                        <NavigateButton>
                            다음 글
                            <NullText>
                                다음 글이 없습니다.
                            </NullText>
                        </NavigateButton>
                    </NavigateBox>
                    <BodyHr />
                </BodyContainer>

            </PostContainer>
        </>
    );
};

export default AdminPost;