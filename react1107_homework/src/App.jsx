import React from 'react';
import "./App.css"
import styled from "styled-components";
import TodoItem from './TodoItem';
import momo from "./check.svg";
const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: pink;
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: '',
    };
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onClickAdd = e => {
    const items = this.state.items;
    items.push(this.state.value);
    this.setState({
      items,
    });
  };

  render() {
    return (
      <>
        <Div>
        <div style={{ display:"flex", justifyContent:"center",flexDirection:"row"}} id="fuckfont">TodoList</div>
          <div style={{ display:"flex", justifyContent:"center",flexDirection:"row"}}>
          
          <input
            type="text"
            onChange={this.onChange}
            style={({ border: "1px solid black" }, { height: "20px" })}
          />
          <button onClick={this.onClickAdd} style={({backgroundColor: "pink"},{border:"none"})}><img src={momo} alt="" /></button>
          </div>

          {this.state.items.map((value, idx) => (
            <TodoItem key={idx} value={value} />
          ))}
        </Div>
      </>
    );
  }
}

export default App;