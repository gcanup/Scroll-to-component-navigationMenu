import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Linkcomponent from './Linkcomponent';


class Linkmain extends Component {


    render() {
        var page= 60
    return (
            <div>
            <p>this is page check </p>
            <Linkcomponent amount={page} />
            </div>
    )
}



}
export default Linkmain ;   