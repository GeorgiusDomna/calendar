import styled, { createGlobalStyle } from 'styled-components'
import Calendar from './components/CalendarWeek';
import Header from './components/Header';
import Body from './components/Table';
import Footer from './components/Footer';
import { useState } from 'react';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
  max-width: 740px;
  border: 1px solid #EAEAEA;
  margin: 0 auto;
  font-family: Arial;
`
const StyledHeader = styled.div`
  position: fixed;
  width: 738px;
  position: fixed;
  top: 0;
`
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
`

function App() {

let [currentDate, setCurrentDate] = useState(null)
let [dates, setDates] = useState([])
function addEvent() {
  let dateEvent = prompt('      Enter event time:\nYYYY-MM-DD HH:mm:ss')
  let date = new Date(dateEvent)
  setDates([...dates, date])
  console.log(dates)
}

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <StyledHeader>
          <Header addEvent={addEvent} />
          <Calendar setCurrentDate={setCurrentDate} currentDate={currentDate} />
        </StyledHeader>
        <Body dates={dates} />
        <Footer />
      </StyledApp>
    </>
  )
}

export default App;
