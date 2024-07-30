import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

//style
import {
    HeaderContainer,
    NavBox,
    Navcontent
} from './style';

const AdminHeader = () => {
    const router = useRouter();
    const handleLogout = async () => {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/logout`, {}, { withCredentials: true });
            // 로그아웃 후 홈 페이지로 리디렉션
            router.push('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <HeaderContainer>
            BlueBS 관리자 페이지
            <NavBox>
                <Navcontent onClick={() => router.push('/admin/post')}>
                    게시판 글 작성
                </Navcontent>
                <Navcontent onClick={() => router.push('/admin/fix')}>
                    게시판 글 삭제 / 수정
                </Navcontent>
                <Navcontent onClick={handleLogout}>
                    로그아웃
                </Navcontent>
            </NavBox>
        </HeaderContainer>
    );
};

export default AdminHeader;
