import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class CheckBox extends Component {
    render() {
        let content="";
        if (true){
            content= "Hello";
        }
        return (
            <div>
            <h1>Hello </h1>
            {content} <br />
            {"hello"} <br />
            {5+2==7?"Yes":"No"}
            </div>
        );
    }
}
export default CheckBox;