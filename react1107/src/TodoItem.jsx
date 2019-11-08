import React, { Component } from "react"

class TodoItem extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div>
                <span>Todo</span>
                <button>수정</button>
                <button>삭제</button>
            </div>
        )
    }
}
export default TodoItem;