import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
//style
import {
    TitleBar,
    TitleTextBox,
    TitleMainText,
    MainContainer,
    MapContainer,
    MapDescriptionBox,
    TextBox,
    EmptyBox,
    RegularText,
    Hr,
} from '../../../styles/Communication/MapWay/style';

const MapWay = () => {
    return (
        <>
            <TitleBar>
                <TitleTextBox>
                    Home · Communication · 오시는 길
                    <TitleMainText>
                        오시는 길
                    </TitleMainText>
                </TitleTextBox>
            </TitleBar>

            <MainContainer>
                <Hr />
                <MapContainer>
                    <Map
                        center={{ lat: 37.268120, lng: 126.987044 }}   // 지도의 중심 좌표
                        level={3}
                    >
                        <MapMarker position={{ lat: 37.268120, lng: 126.987044 }}></MapMarker>
                    </Map>
                    <MapDescriptionBox>
                        <TextBox>
                            주소
                            <RegularText>
                                경기 수원시 권선구 서호로 89<br />
                                서울대 농생명과학센터 2동 202호
                            </RegularText>
                        </TextBox>
                        <EmptyBox/>
                        <TextBox>
                            연락처
                            <RegularText>
                                031-292-1447
                            </RegularText>
                        </TextBox>
                        <TextBox>
                            팩스
                            <RegularText>
                                031-292-1448
                            </RegularText>
                        </TextBox>
                    </MapDescriptionBox>
                </MapContainer>
                <Hr />
            </MainContainer>
        </>
    );
};

export default MapWay;