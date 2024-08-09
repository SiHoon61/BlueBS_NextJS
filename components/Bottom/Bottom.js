import React from 'react';
import { useRouter } from 'next/router';

//style
import {
    Container,
    WhiteLogo,
    TextBox,
    CompanyName,
    CompanyInformation,
    Content,
} from './style';

const Bottom = () => {
    const router = useRouter();
    const goAdmin = () => {
        router.push("/admin");
    }
    return (
        <Container>
            <WhiteLogo onClick={goAdmin} />
            <TextBox>
                <CompanyName>
                    (주)블루비에스
                </CompanyName>
                <CompanyInformation>
                    <Content>
                        대표: 홍 민
                    </Content>
                    <Content>
                        주소: 경기도 수원시 권선구 서호로 89 서울대 농생명과학센터 2동 202호
                    </Content>
                    <Content>
                        전화번호: 031-292-1447
                    </Content>
                    <Content>
                        FAX: 031-292-1448
                    </Content>
                </CompanyInformation>
            </TextBox>
        </Container>
    );
};

export default Bottom;
