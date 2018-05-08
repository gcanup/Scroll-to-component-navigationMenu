import React, { Component } from 'react';
import {connect} from "react-redux";
import User from './User';
import Main from './Main';



class Redux extends Component {

    render() {
        return (
            <div className="container">
                <Main changeUsername= {() => this.props.setName("Anna")} />
                <User username={this.props.user.name} />
            </div>
        )
    }

}
    const mapStateToProps = (state) => {
        return {
            user: state.userReducer,
            math: state.mathReducer
        }
    }
    const mapDispatchToProps = (dispatch) => {
        return {
                    setName: (name) => {
                        dispatch({
                            type: "SET_NAME",
                            payload: name   
                        })
                    }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Redux);