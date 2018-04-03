import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Home extends Component {
    constructor(props) {
        super();

        this.state={
            page: 70
        }

        console.log('Constructor');
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentWillReceiveProps(nextProps){
        console.log('component receive props', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component eill update', nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log('component did update', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }
    onMakeOlder() {
        this.age += 3;
    }

    onChangepage() {
        this.props.pageprop(this.state.page);
    }

    onHandlechange(event) {
        this.setState({
            page: event.target.value
        })
    }
    render() {
        return (
            
            <div>
                    <p> I am a new component</p>
                    <p> Your name is {this.props.name}, your age is {this.props.age}</p>
                    <hr />
                    <button onClick={() =>this.onMakeOlder()} className="btn btn-primary" > Make me older </button>
                    <br /> <hr />
                    <input type="text" placeholder={this.props.initialPagenum} onChange={(event) => this.onHandlechange(event)}/>
                    <br /> <hr />
                    <button onClick={() =>this.onChangepage()} className="btn btn-primary" > page change </button>
            </div>
        );
    }
}
Home.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,

};
export default Home;