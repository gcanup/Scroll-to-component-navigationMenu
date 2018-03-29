import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Home extends Component {
    render() {
        
            console.log(this.props.name);
            var text ="something";
        return (
            
            <div>
            
            <h1>Hello {text} your name is {this.props.age} </h1>
            {this.props.name} <br />
            {5+2==7?"Yes":"No"}

            <h2>Hobbies </h2>
            Yout hobby is:{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}


            </div>
        );
    }
}
export default Home;