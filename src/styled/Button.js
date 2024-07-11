
import styled from "styled-components";

export const Button = styled.button `
padding: 10px 10px;
background-color:black;
border-radius:5px;
color:white;
font-size:16px;
min-width:220px;
border:none;
cursor: pointer;
transition:0.4s background ease-in; 

&:hover{
  background-color:white;
  border:1px solid black;
 color:black;
 transition:0.3s background ease-in; 
}

`;