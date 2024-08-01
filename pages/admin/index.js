import React, { useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';

import {
    LoginContainer,
    LoginForm,
} from './style'


const AdminLogin = () => {
    const router = useRouter();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const loginHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/login', {
                id: id,
                pw: pw,
            }, {
                withCredentials: true
            });
            alert('로그인 성공');
            console.log(response.headers);
            router.push(`/AdminPage/AdminPost`);
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <LoginContainer>
            <div>
                bluebs 관리자 로그인
            </div>
            <LoginForm method="POST" onSubmit={loginHandler}>
                <input value={id} onChange={(e) => setId(e.target.value)} />
                <input type='current-password' value={pw} onChange={(e) => setPw(e.target.value)} />
                <input type='submit' value={'로그인'} />
            </LoginForm>
        </LoginContainer>
    );
};

export default AdminLogin;