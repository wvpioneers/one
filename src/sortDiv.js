import React from "react"
import styled from 'styled-components'


export default function SortDiv({
  wrapstyle,
  style1,
  style2,
  style3,
  style4
}) {

  return (<>wrapper
    <Wrapper wrapstyle={wrapstyle}>
      <Div1 style1={style1}>Div 1</Div1>
      <Div2 style2={style2}>Div 2</Div2>
      <Div3 style3={style3}>Div 3</Div3>
      <Div4 style4={style4}>Div 4</Div4>
    </Wrapper>
  </>
  )
}

const Wrapper = styled.div`
  ${({ wrapstyle }) => wrapstyle}
`;

const Div1 = styled.div`
  ${({ style1 }) => style1}
`;

const Div2 = styled.div`
  ${({ style2 }) => style2}

`;

const Div3 = styled.div`
  ${({ style3 }) => style3}

`;

const Div4 = styled.div`
  ${({ style4 }) => style4}
`;
