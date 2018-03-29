import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import CheckBox from './CheckBox';
import Home from './Home';

class App extends React.Component {

    render() {
        var user={
                name:"Anna",
                hobbies: ["sports", "reading"]
        }
    

    return(
        <div className="container">
        <Home name={"Max"} age={27} user={user}/>
        <CheckBox />
        </div>
    );
 }
}

        export default App;