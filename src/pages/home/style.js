import styled from "styled-components";

export const MainMod = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  padding: 24px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1c1e22;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  h1 {
    font-size: 1.1rem;
    color: #ffffff;
    margin: 12px 16px;
  }
`;

export const Genre = styled.span`
  align-self: flex-start;
  margin: 12px 16px 0;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;


  background-color: var(--genre-bg);
`
export const BtnMais = styled.button`
  display:block;  
width:30%;  
  font-size:15pt;
  background-color:#1276D8;
  margin:15px auto;
  padding: 10px 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor:pointer;
`
export const BtnDetails = styled.button`
display:block;  
width:90%;  
  font-size:15pt;
  background-color:#1276D8;
  margin:15px auto;
  padding: 10px 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor:pointer;
`