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
        value: ""
      };
    }
  
    onChange = e => {
      this.setState({ value: e.target.value });
    };
  
    onClickAdd = e => {
      const items = this.state.items;
      items.push(this.state.value);
      this.setState({
        items
      });
      console.log(this.state.items)
    };
  
    onClickDel = idx => {
      const items = this.state.items;
      this.setState({
        items: [...items.slice(0, idx), ...items.slice(idx + 1)]
      });
    };

    onClickChange = (idx,value) => {
      const newItems = [
        ...this.state.items.slice(0,idx),
        value,
        ...this.state.items.slice(idx + 1)
      ]
      this.setState({items:newItems})
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
            <TodoItem 
            onClickDel={() =>this.onClickDel(idx)}
            onClickChange={() =>{
              const value = prompt("수정값 입력");
              this.onClickChange(idx,value);
            }}
             key={Math.random()}
             value={value} />
          ))}
        </Div>
      </>
    );
  }
}

export default App;