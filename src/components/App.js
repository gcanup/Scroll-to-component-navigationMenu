import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Home from './Home';
import Test from './Test';
import Linkcomponent from './Linkcomponent';


class App extends React.Component {

    constructor(props) {
        super();

        this.state = {
            homelink: "home",
            page: 60,
            homeMounted: true
        };
    }

    onChangeHomeMounted() {
        this.setState({
            homeMounted: !this.state.homeMounted
        })
    }

    changePage(newpage) {
        this.setState({
            page: newpage
        })
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

        let homeCmp = "";
        if (this.state.homeMounted) {
            homeCmp =                 
                    <Home 
                    name="Max" age={27} 
                    user={user} 
                    changelink={this.changeName.bind(this)} 
                    pageprop={this.changePage.bind(this)} 
                    initialPagenum= {this.state.page} />
        }
        return(
            <div className="container">

                <Test int={50} homelink={this.state.homelink} /> <br /> <hr />
                <Linkcomponent amount={this.state.page} And it will be changed />
                {homeCmp}
                <button onClick={this.onChangeHomeMounted.bind(this)}>Change mount</button>

            </div>   

        )



    }





}    
export default App;