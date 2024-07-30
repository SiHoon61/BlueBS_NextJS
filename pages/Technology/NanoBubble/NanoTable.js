import React from 'react';
import styled from 'styled-components';

//img
const nanoTable1 = '/assets/Technology/nanoTable1.svg'
const nanoTable2 = '/assets/Technology/nanoTable2.svg'
const nanoTable3 = '/assets/Technology/nanoTable3.svg'
const nanoTable4 = '/assets/Technology/nanoTable4.svg'

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


const RedTd = styled.td`
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 18px;
  color: #C00000;
  font-family: var(--font-sansBold);
  @media (max-width: 600px) {
      padding: 12px;
    }
`


const Timg = styled.img`
    width: 100%;
`


const NanoTable = () => {
    return (
        <>
            <StyledTable>
                <tbody>
                    <TR>
                        <R1TD>정적 다단 전단 </R1TD>
                        <R1TD>소용돌이 회전</R1TD>
                        <R1TD>회전진단</R1TD>
                        <R1TD>난류 정적</R1TD>
                    </TR>
                    <TR>
                        <R2Td><Timg src={nanoTable1} alt="nano" /></R2Td>
                        <R2Td><Timg src={nanoTable2} alt="nano" /></R2Td>
                        <R2Td><Timg src={nanoTable3} alt="nano" /></R2Td>
                        <R2Td><Timg src={nanoTable4} alt="nano" /></R2Td>
                    </TR>
                    <TR>
                        <TD>100nm, 고밀도</TD>
                        <TD>200nm ~ 30μm</TD>
                        <TD>200nm ~ 30μm</TD>
                        <RedTd>100nm ~ 10μm</RedTd>
                    </TR>
                    <TR>
                        <TD>부유물질(SS)<br />청수에 적합</TD>
                        <TD>부유물질 적은 청수에 적합</TD>
                        <TD>부유물질 상관없음</TD>
                        <RedTd>부유물질 상관없음</RedTd>

                    </TR>
                    <TR>
                        <TD>소량 생산</TD>
                        <TD>중소량 생산</TD>
                        <TD>중규모</TD>
                        <RedTd>대규모</RedTd>
                    </TR>
                    <TR>
                        <TD>난류방해/막힘 큼</TD>
                        <TD>난류방해 보통</TD>
                        <TD>난류방해 보통</TD>
                        <RedTd>난류방해 없음</RedTd>
                    </TR>
                </tbody>
            </StyledTable>
        </>
    );
};

export default NanoTable;