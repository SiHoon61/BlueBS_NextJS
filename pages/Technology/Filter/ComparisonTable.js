import React from 'react';
import styled from 'styled-components';

//img
import fiberFilter from '../../../assets/Technology/fiberFilter.png'
import msFilter from '../../../assets/Technology/msFilter.png'

const StyledTable = styled.table`
  width: 100%;
  font-size: 20px;
  border-collapse: collapse;
  font-family: var(--font-sansMedium);
  @media (max-width: 1000px) {
        font-size: 18px;
    }
    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

const TR = styled.tr``;

const TD = styled.td`
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 18px;
  @media (max-width: 600px) {
      padding: 10px;
    }
`;

const R1TD = styled.td`
  border: 1px solid #E2E2E2;
  border-top: 3px solid black;
  background-color: #E9E9E9;
  text-align: center;
  padding: 18px;
  font-family: var(--font-sansBold);
  @media (max-width: 600px) {
      padding: 10px;
    }
`;

const R2Td = styled.td`
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 0px;
`

const RedTd = styled.td`
  font-family: var(--font-sansBold); 
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 18px;
  color: #C00000;
  @media (max-width: 600px) {
      padding: 10px;
    }
`

const Timg = styled.img`
    width: 300px;
    @media (max-width: 1250px) {
      width: 70%;
    }
`

const ComparisonTable = () => {
    return (
        <>
            <StyledTable>
                <tbody>
                    <TR>
                        <R1TD>항목</R1TD>
                        <R1TD>마이크로 여과 필터(MSF)</R1TD>
                        <R1TD>섬유형 여과</R1TD>
                    </TR>
                    <TR>
                        <TD>대 표 도</TD>
                        <R2Td><Timg src={msFilter} alt="msFilter" /></R2Td>
                        <R2Td><Timg src={fiberFilter} alt="fiberFilter" /></R2Td>
                    </TR>
                    <TR>
                        <TD>적용분야</TD>

                        <TD>하/폐수, 농업용</TD>
                        <TD>하/폐수 총인 처리용, 농업용수 부적합</TD>
                    </TR>
                    <TR>
                        <TD>재질</TD>

                        <TD>스테인스틸</TD>
                        <TD>폴리에스테르/나일론</TD>
                    </TR>
                    <TR>
                        <TD>공극 크기</TD>

                        <TD>10 미크론</TD>
                        <TD>5 ~ 10 미크론</TD>
                    </TR>
                    <TR>
                        <TD>약품 응집조</TD>

                        <RedTd>불필요</RedTd>
                        <RedTd>필요 (약품사용)</RedTd>
                    </TR>
                    <TR>
                        <TD>혼화 응집조</TD>

                        <RedTd>불필요</RedTd>
                        <RedTd>필요 (체류시간 필요)</RedTd>
                    </TR>
                    <TR>
                        <TD>약품세정</TD>

                        <RedTd>물로 세정</RedTd>
                        <RedTd>화약염소 세정<br />약품보관 관리 주의</RedTd>
                    </TR>
                    <TR>
                        <TD>농축폐수</TD>

                        <RedTd>발생하지 않음</RedTd>
                        <RedTd>다량 발생</RedTd>
                    </TR>
                    <TR>
                        <TD>수질 성능</TD>

                        <TD>스테인스틸(SUS) 여과장치에 의해 SS 90% 이상 제거</TD>
                        <TD>약품 응집에 의해 SS제거 85% ~ 90%<br />섬유형 여과는 잔존 ~ 10% 내외 제거</TD>
                    </TR>
                    <TR>
                        <TD>검토</TD>

                        <TD>무 약품 워터세정 + Compact 여과장치</TD>
                        <TD>약품 세정/유지관리 + 침전탱크 + 긴 HRT 소요 여과장치</TD>
                    </TR>
                </tbody>
            </StyledTable>
        </>
    );
};

export default ComparisonTable;