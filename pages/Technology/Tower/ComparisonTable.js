import React from 'react';
import styled from 'styled-components';

//img
const et = '/assets/Technology/ET.png'
const daf = '/assets/Technology/DAF.png'
const fiber = '/assets/Technology/fiber.png'

const StyledTable = styled.table`
  margin-top: 35px;
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
      padding: 12px;
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
      padding: 12px;
    }
`;

const R2Td = styled.td`
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 0px;
`

const Timg = styled.img`
    width: 100%;
`


const ComparisonTable = () => {
    return (
        <>
            <StyledTable>
                <tbody>
                    <TR>
                        <R1TD>항목</R1TD>
                        <R1TD>전기촉매타워(ET)</R1TD>
                        <R1TD>용존공기부상(DAF)</R1TD>
                        <R1TD>섬유형 여과 필터</R1TD>
                    </TR>
                    <TR>
                        <TD>대표사진</TD>
                        <R2Td><Timg src={et} alt="ET" /></R2Td>
                        <R2Td><Timg src={daf} alt="DAF" /></R2Td>
                        <R2Td><Timg src={fiber} alt="fiber" /></R2Td>
                    </TR>
                    <TR>
                        <TD>목적</TD>
                        <TD>입자/용존성/세균 제거</TD>
                        <TD>입자 및 고액분리</TD>
                        <TD>입자 및 고액분리 </TD>
                    </TR>
                    <TR>
                        <TD>원리</TD>
                        <TD>전기촉매 필터(EF) 연계<br />응집/흡착 및 부상분리</TD>
                        <TD>미세기포 + 응집제 부상분리</TD>
                        <TD>응집약품 혼화응집 후 섬유여과 필터</TD>
                    </TR>
                    <TR>
                        <TD>특징</TD>
                        <TD>유체 흐름 원-패스 고액분리<br />One Pass Flow</TD>
                        <TD>처리수 연계 순환 고액분리<br />Return circulation</TD>
                        <TD>응집 침전 연계 고액분리<br />Coagulation Mixing<br /> Sedimentation Linkage</TD>
                    </TR>
                    <TR>
                        <TD>유지관리</TD>
                        <TD>저약품 저동력</TD>
                        <TD>고약품 고동력</TD>
                        <TD>고약품 고동력</TD>
                    </TR>
                    <TR>
                        <TD>처리효율</TD>
                        <TD>조류, 탁도/SS {'>'} 98%<br />세균/바이러스 {'>'} 99%<br />TN {'>'} 80%, DOC {'>'} 50%</TD>
                        <TD>조류, 탁도/SS{'>'}95%
                        </TD>
                        <TD>조류, 탁도/SS {'>'} 99%<br />(단, 응집침전이 90%)<br />잔여 입자만 9% 내외</TD>
                    </TR>
                    <TR>
                        <TD>단점</TD>
                        <TD>저약품 응집제 주입</TD>
                        <TD>총인 혹은 입자 처리 한계<br /> 미세기포 밀도 좌우</TD>
                        <TD>과도한 응집제<br />섬유필터 화학약품 주입<br />세정 농축수 문제</TD>
                    </TR>
                </tbody>
            </StyledTable>
        </>
    );
};

export default ComparisonTable;