import React, { useState } from "react"
import styled from 'styled-components';
import SortDiv from "./sortDiv";

export default function Home() {

  const [fieldOne, setFieldOne] = useState();
  const [fieldTwo, setFieldTwo] = useState();
  const [fieldThree, setFieldThree] = useState();
  const [fieldFour, setFieldFour] = useState();

  function clickOne(e) {
    e.preventDefault();
    setFieldThree(hexToRGB("#" + fieldOne));
    setFieldFour(nameToHex(fieldTwo));
  }


  function hexToRGB(h) {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];

      // 6 digits
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }

    return "rgb(" + +r + "," + +g + "," + +b + ")";
  }

  function nameToHex(name) {
    // Get RGB from named color in temporary div
    let fakeDiv = document.createElement("div");
    fakeDiv.style.color = name;
    document.body.appendChild(fakeDiv);

    let cs = window.getComputedStyle(fakeDiv),
      pv = cs.getPropertyValue("color");

    document.body.removeChild(fakeDiv);

    // Code ripped from RGBToHex() (except pv is substringed)
    let rgb = pv.substr(4).split(")")[0].split(","),
      r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);

    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

    return "#" + r + g + b;
  }


  const [wrapper, setWrapper] = useState("display: grid; grid-template-columns: 1fr 1fr 1fr;");
  const [div1, setDiv1] = useState();
  const [div2, setDiv2] = useState();
  const [div3, setDiv3] = useState();
  const [div4, setDiv4] = useState();

  function clearAll() {
    setWrapper('');
    setDiv1('');
    setDiv2('');
    setDiv3('');
    setDiv4('');
  }

  return (<All>
    {/* <div>OUTPUT: {fieldThree}, {fieldFour}</div> */}
    {/* <label>Set font color
     <input type="text" value={fieldOne} name={"first"} onChange={e => setFieldOne(e.target.value)} />
    </label> */}
    {/* <MyForm>
      <Label>#
      <input type="text" value={fieldOne} name={"first"} onChange={e => setFieldOne(e.target.value)} />
      </Label>
      <Label>color name
      <input type="text" value={fieldTwo} name={"second"} onChange={e => setFieldTwo(e.target.value)} />
      </Label>
      <div>
        <button type="submit" onKeyPress={clickOne} onClick={clickOne}>Submit</button>
      </div>
    </MyForm> */}
    <MyForm2>
      <Head>Make B look like A
         <div>
          <button onClick={clearAll}>Start Over</button>
        </div>
      </Head>

      <Rap>
        <Header>A</Header>
        wrapper
          <T1>
          <T2>Div 1</T2>
          <T3>Div 2</T3>
          <T4>Div 3</T4>
          <T5>Div 4</T5>
        </T1>
      </Rap>
    </MyForm2>
    <Rap2>
      <Header2>B</Header2>
      <SortDiv
        wrapstyle={wrapper}
        style1={div1}
        style2={div2}
        style3={div3}
        style4={div4}
      />
    </Rap2>

    <MyFormGrid>
      <div style={{ display: "flex", flexDirection: "column", fontWeight: "400", color: "gray", gridRow: "1 / span 6", gridColumn: "1 / span 1", marginRight: "30px" }}>
        <div style={{ border: "1px solid gray", padding: "20px", }}>
          <div>&#60;div&#62;</div>
          <div style={{ paddingLeft: "10px" }}>wrapper</div>
          <div style={{ paddingLeft: "20px" }}>&#60;div <b style={{ color: "red" }}>class=S-Wrapper</b> &#62;</div>
          <div style={{ paddingLeft: "30px" }}>&#60;div <b style={{ color: "red" }}>class=S-Div1</b> &#62;Div 1&#60;/div&#62;</div>
          <div style={{ paddingLeft: "30px" }}>&#60;div <b style={{ color: "red" }}>class=S-Div2</b> &#62;Div 2&#60;/div&#62;</div>
          <div style={{ paddingLeft: "30px" }}>&#60;div <b style={{ color: "red" }}>class=S-Div3</b> &#62;Div 3&#60;/div&#62;</div>
          <div style={{ paddingLeft: "30px" }}>&#60;div <b style={{ color: "red" }}>class=S-Div4</b> &#62;Div 4&#60;/div&#62;</div>
          <div style={{ paddingLeft: "20px" }}>&#60;/div&#62;</div>
          <div style={{ paddingLeft: "10px" }}>&#60;/div&#62;</div>
        </div>
      </div>
      <div style={{ justifySelf: "flex-end", color: "red" }}>S-Wrapper</div>
      <Textarea spellCheck={false} type="text" value={wrapper} onChange={e => setWrapper(e.target.value)} />
      <div style={{ justifySelf: "flex-end", color: "red" }}>S-Div1</div>
      <Textarea spellCheck={false} type="text" value={div1} onChange={e => setDiv1(e.target.value)} />
      <div style={{ justifySelf: "flex-end", color: "red" }}>Div 2</div>
      <Textarea spellCheck={false} type="text" value={div2} onChange={e => setDiv2(e.target.value)} />
      <div style={{ justifySelf: "flex-end", color: "red" }}>Div 3</div>
      <Textarea spellCheck={false} type="text" value={div3} onChange={e => setDiv3(e.target.value)} />
      <div style={{ justifySelf: "flex-end", color: "red" }}>Div 4</div>
      <Textarea spellCheck={false} type="text" value={div4} onChange={e => setDiv4(e.target.value)} />
    </MyFormGrid>
  </All>
  )
}

const All = styled.div`
width: min(100%, 1200px);
margin: 0 auto;
`;

const RapStyle = styled.div`
  position: relative;
  height: auto;
  padding: 30px;
box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0,0,0,.12);
    border-width: 1px;
    border-style: solid;
    border-color: #e0e0e0;
    background-color: white;
border-radius: 10px;
`;

const Rap = styled(RapStyle)`

`;

const Rap2 = styled(RapStyle)`

`;

const Header = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  font-family: work sans, san-serif;
  font-size: 30px;
  font-weight: 600;
  color: purple;
`;

const Header2 = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  font-family: work sans, san-serif;
  font-size: 30px;
  font-weight: 600;
  color: #a91009;
`;
const Textarea = styled.textarea`
  height: 50px;
  width: 500px;
`;
const MyFormGrid = styled.div`
  display: grid;
  grid-template-columns: auto 100px 1fr;
  grid-gap: 10px;
  padding: 20px;
`;

const Head = styled.div`
  // font-family: Work Sans, san-serif;
  // font-weight: 600;
  // color: blue;
  // margin-bottom: 20px;
      margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.5rem;
    color: black;
    font-family: 'Futura PT',-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2rem;
    line-height: 1.25;
`;
const T1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  background-color: gray;
  padding: 10px;
  border-radius: 10px;
`;

const T2 = styled.div`
grid-column: 3 / span 1;
grid-row: 1 / span 2;
border: 1px solid white;
padding: 10px;
border-radius:50%;
display: flex;
justify-content: center;
align-items: center;
`;
const T3 = styled.div`
grid-column: 1 / span 1;
border: 1px solid white;
padding: 10px;
`;
const T4 = styled.div`
grid-column: 2 / span 1;
border: 1px solid white;
padding: 10px;
`;
const T5 = styled.div`
grid-column: 1 / span 2;
border: 1px solid white;
padding: 10px;
`;

const Label = styled.label`
display: flex;
align-items: baseline;
margin-bottom: 40px;
& input {
  margin-left: 10px;  
}
& textarea {
  height: 80px;
  width: 500px;

}
`;

const MyForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyForm2 = styled.div`
margin: 20px 0;
  display: flex;
  flex-direction: column;
`;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
