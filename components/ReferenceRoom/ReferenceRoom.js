import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
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
    NavigateText,
    NullText,
} from './style';

const ReferenceRoom = () => {
    const router = useRouter();
    const { id } = router.query;
    const [posts, setPosts] = useState([]);
    const [postPre, setPostPre] = useState([]);
    const [postNext, setPostNext] = useState([]);
    useEffect(() => {
        if (id) {
            const handleFetchPost = async () => {
                try {
                    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/reference?id=${id}`);
                    setPosts(response.data.current);
                    setPostPre(response.data.previous);
                    setPostNext(response.data.next);
                } catch (err) {
                    setPosts(null);
                    console.error('Error fetching post:', err);
                }
            };
            handleFetchPost();
        }
    }, [id]);

    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Communication · 홍보자료실
                    <TitleMainText>
                        홍보자료실
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>
            <MainContainer>
                <BodyContainer>
                    <BodyHr />
                    <TopTitle>
                        {posts.title}
                        <TopSubTitle>
                            작성자
                            <GreyTitle>
                                {posts.writer}
                            </GreyTitle>
                            작성일
                            <GreyTitle>
                                {posts.date}
                            </GreyTitle>
                        </TopSubTitle>
                    </TopTitle>
                    <BottomHr />
                    <BodyText>
                        {posts.content}
                    </BodyText>
                    {posts.pdfName !== "" ? <AttachedBox>
                        첨부파일
                        <AttachedFile
                            href={`data:application/pdf;base64,${posts.pdf}`}
                            download={`${posts.pdfName}.pdf`}
                        >
                            {posts.pdfName}
                        </AttachedFile>
                    </AttachedBox> : <></>}
                    <BodyHr />
                    <NavigateBox>
                        <NavigateButton>
                            이전 글
                            {postPre.title ? (
                                <NavigateText onClick={() => router.push(`/communication/reference/${postPre.id}`)}>
                                    {postPre.title}
                                </NavigateText>
                            ) : (
                                <NullText>
                                    이전 글이 없습니다.
                                </NullText>
                            )}
                        </NavigateButton>
                        <BottomHr />
                        <NavigateButton>
                            다음 글
                            {postNext.title ? (
                                <NavigateText onClick={() => router.push(`/communication/reference/${postNext.id}`)}>
                                    {postNext.title}
                                </NavigateText>
                            ) : (
                                <NullText>
                                    다음 글이 없습니다.
                                </NullText>
                            )}
                        </NavigateButton>
                    </NavigateBox>
                    <BodyHr />
                </BodyContainer>

            </MainContainer>
        </>

    );
};

export default ReferenceRoom;