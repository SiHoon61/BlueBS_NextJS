import React from 'react';

import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    NewsContainer,
    SubContainer,
    MedianLine,
} from '../../../styles/Communication/NewsRoom/style';

import {
    SubTitle,
} from '../../../components/Body/bodyStyle';

//News & Data
import NewsBox from '../../../components/News/News';
import DataRoom from '../../../components/DataRoom/DataRoom';

const NewsRoom = () => {
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
                <SubContainer>
                    <SubTitle>
                        최신뉴스
                    </SubTitle>
                    <NewsContainer>
                        <NewsBox/>
                    </NewsContainer>
                </SubContainer>
                <MedianLine/>
                <SubContainer>
                    <SubTitle>
                        자료실
                    </SubTitle>
                    <NewsContainer>
                        <DataRoom />
                    </NewsContainer>
                </SubContainer>
            </MainContainer>
        </>
    );
};

export default NewsRoom;