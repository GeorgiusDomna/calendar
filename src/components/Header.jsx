import React from "react";
import styled from 'styled-components'

const StyledHeader = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
height: 100px;
`
const StyledTitle = styled.div`
margin: 30px;
font-size: 35px;
`
const StyledBtn = styled.div`
margin: 20px;
font-size: 60px;
color: #FF3131;
`

function Header(props) {
  return (
    <StyledHeader>
      <StyledTitle>
        Interview Calendar
      </StyledTitle>
      <StyledBtn onClick={props.addEvent}>+</StyledBtn>
    </StyledHeader>
  )
}

export default Header;