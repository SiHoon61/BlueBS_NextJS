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
      padding: 12px;
    }
`;

const SmallTD = styled.span`
  font-size: 15px;
  font-family: var(--font-sansRegular);
  text-align: center;
  color: #313131;
  @media (max-width: 1000px) {
        font-size: 14px;
    }
    @media (max-width: 600px) {
        font-size: 13px;
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

const R1C1TD = styled.td`
  width: 200px;
  border: 1px solid #E2E2E2;
  border-top: 3px solid black;
  background-color: #E9E9E9;
  text-align: center;
  padding: 18px;
  font-family: var(--font-sansBold);
  @media (max-width: 1200px) {
      width: auto;
    }
    @media (max-width: 600px) {
      padding: 12px;
    }
`;


const ComparisonTable = () => {
    return (
        <>
            <StyledTable>
                <tbody>
                    <TR>
                        <R1C1TD>항목</R1C1TD>
                        <R1TD>전기촉매 필터(EF)</R1TD>
                        <R1TD>오존(O<sub>3</sub>) AOP</R1TD>
                        <R1TD>저온 플라즈마 AOP</R1TD>
                    </TR>
                    <TR>
                        <TD>원리</TD>
                        <TD>촉매 흡착/산화 반응</TD>
                        <TD>OH 라디칼</TD>
                        <TD>OH 라디칼</TD>
                    </TR>
                    <TR>
                        <TD rowSpan="2">운영방식
                        </TD>
                        <TD>유체흐름 다면적 필터 접촉</TD>
                        <TD>버블 가스 주입 접촉</TD>
                        <TD>버블 가스 주입 접촉</TD>
                    </TR>
                    <TR>
                        <TD>전압/전류 최적제어</TD>
                        <TD>기포 용해율</TD>
                        <TD>기포 용해율</TD>
                    </TR>
                    <TR>
                        <TD>산화능력<br />
                            <SmallTD>(용존성 DOC)<br />
                                (입자성 유기탄소 제외)</SmallTD></TD>
                        <TD>하천수 50% (5분)</TD>
                        <TD>하천수 5% 미만 (5분)</TD>
                        <TD>하천수 15% 미만 (5분)</TD>
                    </TR>
                    <TR>
                        <TD>단점</TD>
                        <TD>필요시 소량 응집제 필요</TD>
                        <TD>기체 용해율 좌우<br />
                            장치 습도/온도 민감<br />
                            배오존 처리
                        </TD>
                        <TD>기체 용해율 필요<br />
                            장치 습도/온도 민감</TD>
                    </TR>
                </tbody>
            </StyledTable>
        </>
    );
};

export default ComparisonTable;