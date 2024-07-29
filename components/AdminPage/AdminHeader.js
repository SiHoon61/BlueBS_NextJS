import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AdminHeader = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await axios.post('/api/logout', {}, { withCredentials: true });
            router.push('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <div className="flex flex-col h-64 text-white bg-blue-800 items-center justify-center">
            <div className="text-4xl font-bold">BlueBS 관리자 페이지</div>
            <ul className="flex justify-center items-center list-none mt-8">
                <li className="mx-12 text-lg cursor-pointer" onClick={() => router.push('/admin/adminPost')}>
                    게시판 글 작성
                </li>
                <li className="mx-12 text-lg cursor-pointer" onClick={() => router.push('/admin/adminFix')}>
                    게시판 글 삭제 / 수정
                </li>
                <li className="mx-12 text-lg cursor-pointer" onClick={handleLogout}>
                    로그아웃
                </li>
            </ul>
        </div>
    );
};

export default AdminHeader;
