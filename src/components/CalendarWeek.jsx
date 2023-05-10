import React, { useState } from "react";
import styled from 'styled-components'
import NavBar from "./NavBar";

const StyledConatiner = styled.div`
  padding: 5px;
  display: flex;
  justify-content: right;
  background-color: #F6F6F6;
  border: 1px solid #EAEAEA;
  
`
const StyledCalendar = styled.div`
  width: 645px;
`
const StyledTd = styled.td`
  text-align: center;
  width: 80px;
  height: 80px;
  font-size: 30px;
  &.active {
    color: white;
    border-radius: 50%;
    background-color: #FF3131;
  }
`
const StyledTh = styled.th`
  width: 90px;
  font-size: 21px;
`

function Calendar(props) {

  let date = new Date();
  let dayOfWeek = date.getDay();
  let daysToMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  let [mondayDate, setMondayDate] = useState(new Date(date.getTime() - (daysToMonday * 86400000)));

  function changeDate(days, flag) {
    if (flag) {
      return new Date(mondayDate.getTime() + (days * 86400000))
    } else {
      return new Date(mondayDate.getTime() - (days * 86400000))
    }
  }

  function prevWeek() {
    setMondayDate(changeDate(7))
  }
  function nextWeek() {
    setMondayDate(changeDate(7, true))
  }

  const [activeCell, setActiveCell] = useState(null);

  const handleCellClick = (event, date) => {
    if (activeCell) {
      activeCell.classList.remove('active');
    }
    event.target.classList.add('active');
    props.setCurrentDate(date)
    setActiveCell(event.target);
  };

  let arr = []
  for (let i = 0; i <= 6; i++) {
    let date = changeDate(i, true)
    arr.push(
      <StyledTd
        key={date.getDate()}
        className={props.currentDate === date ? 'active' : ''}
        onClick={(event) => handleCellClick(event, date)}>
          {date.getDate()}
      </StyledTd>)
  }

  return (
    <StyledConatiner>
      <StyledCalendar>
        <div id="calendar">
          <table>
            <thead>
              <tr>
                <StyledTh>Mon</StyledTh>
                <StyledTh>Tue</StyledTh>
                <StyledTh>Wed</StyledTh>
                <StyledTh>Thu</StyledTh>
                <StyledTh>Fri</StyledTh>
                <StyledTh>Sat</StyledTh>
                <StyledTh>Sun</StyledTh>
              </tr>
            </thead>
            <tbody>
              <tr>
                {arr}
              </tr>
            </tbody>
          </table>
        </div>
        <NavBar
          mounth={mondayDate.getMonth()}
          year={mondayDate.getFullYear()}
          prevWeek={prevWeek}
          nextWeek={nextWeek}/>
      </StyledCalendar>
    </StyledConatiner>
  )
}

export default Calendar;