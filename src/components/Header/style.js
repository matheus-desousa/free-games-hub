import styled from "styled-components";


export const HeaderMod= styled.div`
display:flex;
flex-direction: row;
align-items:center;
background-color:#253846;
justify-content:space-between;
`
export const ImgMod= styled.img`
width:350px;
margin-left:5%;
`
export const InputMod= styled.input`
background-color:#1B2B3A;
color:white;
font-size:15pt;
height:20px;
border: none;
margin-right:5%;
padding: 5px 15px;
border-radius:7px;
`

export const Li = styled.li`
margin:10px;
display:inline;
color:white;
border-bottom: 2px solid transparent;
list-style:none;
transition: border-color 0.3s ease; 
cursor:pointer;
padding-bottom:5px;
    &:hover {
            border-bottom: 2px solid #3498db; 
        }
`

export const Ul = styled.ul`

`