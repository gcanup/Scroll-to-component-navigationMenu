import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Test extends Component {
    constructor(props){
        super();

        this.state= {
            Int: props.int
        }

    }

    increaseMe() {
        this.setState({
            Int: this.state.Int+3
        });
    }


render() {

    return (

        <div>
            
                hello world {this.state.Int}

               <button onClick={this.increaseMe.bind(this)}> Increase me</button> <br />
               our link is: {this.props.homelink} <br />  

        </div>


    );


}


}

export default Test;