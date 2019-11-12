import React, { Component } from 'react';
import styled, { div } from 'styled-components';

  class TodoItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: this.props.value,
        items: props.items
      };
    }
  
    
  

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
        <button onClick={this.props.onClickChange}>수정</button>
        <button onClick={this.props.onClickDel}>삭제</button>
      </div>
    );
  }
}

export default TodoItem;