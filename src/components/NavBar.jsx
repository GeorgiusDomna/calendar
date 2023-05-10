import React from "react";
import styled from 'styled-components'

const StyledNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const StyledDate = styled.div`
  padding: 10px;
  font-size: 26px;
`
const StyledBtn = styled.div`
  color: #FF3131;
  font-size: 35px;
`
const mounth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function NavBar(props) {
  return (
    <StyledNavBar>
      <StyledBtn onClick={props.prevWeek}>&lt;</StyledBtn>
      <StyledDate>{mounth[props.mounth]} {props.year}</StyledDate>
      <StyledBtn onClick={props.nextWeek}>&gt;</StyledBtn>
    </StyledNavBar>
  )
}

export default NavBar;