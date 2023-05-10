import React, { useState } from "react";
import styled from 'styled-components'

const StyledContainer = styled.div`
overflow: auto;
display: flex;
justify-content: right;
margin-top: 260px;
margin-bottom: 80px;
`
const StyledDiv = styled.div`
margin-top: 30px;
margin-left: 5px;
`
const StyledTable = styled.table`
border-collapse: collapse;
border-right: none;
`
const StyledTdTime = styled.td`
color: #6C737A;
font-size: 18px;
height: 60px;
`
const StyledTd = styled.td`
border: 1px solid #EAEAEA;
height: 60px;
width: 90px;
&.active {
  background-color: #A9ADF0;
}
`
const StyledTr = styled.tr`
td:first-child {
  border-left: none;
}
`
let time = [];
for (let i = 1; i < 25; i++) {
  time.push(<tr key={i}><StyledTdTime>{i}:00</StyledTdTime></tr>)
}

function Body({setSelectedMode}) {
  
const [activeCell, setActiveCell] = useState(null);

const handleCellClick = (event) => {
  if (activeCell) {
    activeCell.classList.remove('active');
    setSelectedMode(null);
  }
  event.target.classList.add('active');
  setSelectedMode(event.target)
  setActiveCell(event.target);
};

let cells = [];
for (let i = 0; i < 24; i++) {
  let tds = [];
  for (let j = 0; j < 7; j++) {
    tds.push(<StyledTd key={j} onClick={handleCellClick}></StyledTd>)
  }
  cells.push(<StyledTr key={i}>{tds}</StyledTr>)
}

  return (
    <StyledContainer>
      <div>
        <StyledTable>
          <tbody>
            {time}
          </tbody>
        </StyledTable>
      </div>
      <StyledDiv>
        <StyledTable>
          <tbody>
            {cells}
          </tbody>
        </StyledTable>
      </StyledDiv>
    </StyledContainer>
  )
}

export default Body;