import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Home extends Component {
    constructor() {
        super();
    }

    onMakeOlder() {
        this.age += 3;
    }
    render() {
        return (
            
            <div>
                    <p> I am a new component</p>
                    <p> Your name is {this.props.name}, your age is {this.props.age}</p>
                    <hr />
                    <button onClick={() =>this.onMakeOlder()} className="btn btn-primary" > Make me older </button>
            </div>
        );
    }
}
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,

};
export default Home;