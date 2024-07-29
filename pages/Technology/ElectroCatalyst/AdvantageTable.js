import React from 'react';
import styled from 'styled-components';

//img
import advantageTableImg1 from '../../../assets/Technology/advantageTableImg1.png'
import advantageTableImg2 from '../../../assets/Technology/advantageTableImg2.png'
import advantageTableImg3 from '../../../assets/Technology/advantageTableImg3.png'
import advantageTableImg4 from '../../../assets/Technology/advantageTableImg4.png'

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

const R4Td = styled.td`
  border: 1px solid #E2E2E2;
  text-align: center;
  padding: 18px;
  color: #C00000;
  @media (max-width: 600px) {
      padding: 12px;
    }
`

const R6Td = styled.td`
  border: 1px solid #E2E2E2;
  text-align: center;
`

const Timg = styled.img`
    width: 100%;
`


const AdvantageTable = () => {
    return (
        <>
            <StyledTable>
                <tbody>
                    <TR>
                        <R1TD>1세대(1970s)</R1TD>
                        <R1TD>2세대(1990s)</R1TD>
                        <R1TD>3세대(2000s)</R1TD>
                        <R1TD>4세대(2018s)</R1TD>
                    </TR>
                    <TR>
                        <TD>DSA 촉매</TD>
                        <TD>BBD 촉매</TD>
                        <TD>Ti<sub>4</sub>O<sub>7</sub> 촉매</TD>
                        <TD>전기 촉매 필터(EF)</TD>
                    </TR>
                    <TR>
                        <TD>불용성 산화 전극<br />
                            (Ti/SnO<sub>2</sub>, Ti/PbO<sub>2</sub><br />Ti/RuO<sub>2</sub>, Ti/IrO<sub>2</sub>)
                        </TD>
                        <TD>전도성 붕소 도핑<br />다이아몬드 전극</TD>
                        <TD>산소-Ti 원자의<br />사슬 네트워크 구조의<br />티타늄 아산화물 양극</TD>
                        <TD>탄소/복합(귀)금속/전이금속</TD>
                    </TR>
                    <TR>
                        <R4Td>라디칼 수율 부족<br />
                            (산화력 낮음)</R4Td>
                        <R4Td>오염물질 처리 반감기 후<br />
                            효율 급격히 감소</R4Td>
                        <R4Td>오염물질 처리 반감기 후<br />
                            효율 급격히 감소</R4Td>
                        <R4Td>매우 높은 산화력/환원력<br />
                            반감기 후 지속 유지</R4Td>
                    </TR>
                    <TR>
                        <TD>소독/살균용 적합</TD>
                        <TD>산업폐수</TD>
                        <TD>산업폐수, 하수처리수</TD>
                        <TD>산업폐수, 하수, 상수/정수 등</TD>
                    </TR>
                    <TR>
                        <R6Td><Timg src={advantageTableImg1} alt="advantageTableImg1" /></R6Td>
                        <R6Td><Timg src={advantageTableImg2} alt="advantageTableImg2" /></R6Td>
                        <R6Td><Timg src={advantageTableImg3} alt="advantageTableImg3" /></R6Td>
                        <R6Td><Timg src={advantageTableImg4} alt="advantageTableImg4" /></R6Td>
                    </TR>
                    <TR>
                        <TD>일본, 한국, 중국 등
                            다수 기업 존재</TD>
                        <TD>Boromond사</TD>
                        <TD>MAGNELI MATERIALS, LLC사
                        </TD>
                        <TD>블루비에스</TD>
                    </TR>
                </tbody>
            </StyledTable>
        </>
    );
};

export default AdvantageTable;