import React from 'react';
import styled from 'styled-components';

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

const R2TDLeft = styled.td`
  font-family: var(--font-sansBold);
   color: #C00000;
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 18px;
  @media (max-width: 600px) {
      padding: 10px;
    }
`
const R2TDRight = styled.td`
  font-family: var(--font-sansBold);
  color: #C00000;
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 18px;
  @media (max-width: 600px) {
      padding: 10px;
    }
`

const R4TD = styled.td`
  font-family: var(--font-sansBold);
   color: #2C31BB;
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 18px;
  @media (max-width: 600px) {
      padding: 10px;
    }
`
const GenerationTable = () => {
  return (
    <>
      <StyledTable>
        <tbody>
          <TR>
            <R1TD>1세대(2013~)</R1TD>
            <R1TD>2세대(2017~)</R1TD>
            <R1TD>3세대(2020~)</R1TD>
            <R1TD>4세대(2021~)</R1TD>
            <R1TD>5세대(2022~)</R1TD>
          </TR>
          <TR>
            <R2TDLeft colSpan="2">Electrocatalyst Tower(ET/ZT)</R2TDLeft>

            <R2TDRight colSpan="3">Electrocatalyst Filter(ET/VZ): Smart Control</R2TDRight>
          </TR>
          <TR>
            <TD>살균/소독용</TD>
            <TD>입자분리 복합처리</TD>
            <TD>선택적 총 유기탄소(TOC)</TD>
            <TD>선택적 암모니아</TD>
            <TD>선택적 질산염</TD>
          </TR>
          <TR>
            <R4TD colSpan="2">환경산업기술원 글로벌 탑 사업단 R&D 기술 개발</R4TD>
            <R4TD colSpan="2">환경산업기술원 산업화 지원화 R&D 기술 개발</R4TD>
            <R4TD>자체 R&D 기술 개발</R4TD>
          </TR>
        </tbody>
      </StyledTable>
    </>
  );
};

export default GenerationTable;