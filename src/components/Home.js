import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Home extends Component {

    
    constructor(props) {
        super();

        this.state= {
            Age: props.age,
            homelink: "changed"
        };
    }
   
    increaseAge() {
            this.setState({
                Age: this.state.Age +3
            });
    }

    onChangelink() {
        this.props.changelink(this.state.homelink);
    }


    render() {
        var text = "this is some text no. 2";
        return (
            
            <div>
                    
                    <p> Your name is {this.props.name}, your age is {this.state.Age}</p> 
                    {/*
                    <p> my hobbies are: {this.props.user.hobbies.map((hobby, i) =><li key={i}>{hobby}</li>)} </p> <br />   */ }
                        {text}
                    <button onClick={this.increaseAge.bind(this)}>Increase Age </button>  <br /> <hr />

                    our link is: {this.state.homelink} <br />  
                    <button onClick={this.onChangelink.bind(this)}>Change Link </button> 
                    <hr /> 

            </div>
        );
    }
}



export default Home;