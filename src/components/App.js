import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Home from './Home';
import Test from './Test';
import Linkmain from './Linkmain';


class App extends React.Component {

    constructor(props) {
        super();

        this.state = {
            homelink: "home"
        };
    }



    changeName(newName) {
        this.setState({
            homelink: newName
        });
    }
    render() {
        var user= {
            hobbies: ["cycling", "swimming"],
            level: 5
        }

        return(
            <div className="container">
                <Home name="Max" age={27} user={user} changelink={this.changeName.bind(this)} />
                <Test int={50} homelink={this.state.homelink} /> <br /> <hr />
                <Linkmain />

            </div>   

        )



    }





}    
export default App;