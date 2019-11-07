import React from 'react';
import styled from "styled-components";

// const move = keyframes`
//   0% {
//     transform: translate(0%, 0%);
//     opacity: 0;
//   }
//   50% {
//     transform: translate(100px, 300px);
//     opacity: 0.5;
//   }
//   100%{
//     transform: translate(1000px, 0%);
//     opacity: 1;
//   }
// `;

// const remove = keyframes`
//   0% {
//     transform: translate(0%, 0%);
//     opacity: 1;
//   }
//   50% {
//     transform: translate(100px, 300px);
//     opacity: 0.5;
//   }
//   100%{
//     transform: translate(1000px, 0%);
//     opacity: 0;
//   }
// `
// const Img = styled.img`
//   animation: ${props=>
//   (props.show ? move : remove)} 1s linear infinite;
// `;
// const Root = styled.div`
//   border: 1px solid #ddd;
//   color: ${props => props.color};
//   ${props =>
//   props.isBig && //true면 css를 반환
//   css`
//     font-size: 100px;
//   `}
// `;
// const ShowDiv = styled.div`
//   display:block;
// `
// const NoShowDiv = styled.div`
//   display: none;
// `

const Wrapper = styled.div`
  padding: 15px;
  display: flex;
  align-items: center;
  label{
    font-size: 20px;
    margin-left:10px;
  }
  div{
    display:none;
  }
`
const Input = styled.input`
  & ~ div{
    display: ${props => (props.checked ? "block" :"none")};
  }
`
function App() {
  // const show = false;
  const checked = false;
  return (
    <>
      <Wrapper>
        <Input type="checkbox" id="check1" checked={checked}/>
        <label htmlFor="check1">체크해봐</label>
        <div>체크!!!</div>
      </Wrapper>
    </>
  );
}

export default App;
