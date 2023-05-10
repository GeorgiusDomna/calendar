import React from "react";
import styled from 'styled-components'

const StyledFooter = styled.div`
position: fixed;
width: 737px;
bottom: 0;
display: flex;
justify-content: space-between;
background-color: #F6F6F6;
border: 3px solid #EAEAEA;
`
const StyledBtn = styled.div`
font-size: 25px;
color: #FF3131;
margin: 25px;
&.none {
  display: none;
}
`

function Footer() {
  return (
    <StyledFooter>
      <StyledBtn>
        Today
      </StyledBtn>
      <StyledBtn className="none">
        Delete
      </StyledBtn>
    </StyledFooter>
  )
}

export default Footer;