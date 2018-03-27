import React from 'react';
import ReactDOM from 'react-dom';


class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checked: true };
        this.oncheckedcheck = this.oncheckedcheck.bind(this);
    }
    oncheckedcheck() {
        alert('hello');
        this.setState({ checked: !this.state.checked });
    }
    render() {
        var msg;
        if (this.state.checked) {
            msg = "checked";
        }
        else {
            msg = "unchecked";
        }
        return (<div>
            <input type="checkbox" onChange={this.oncheckedcheck} defaultChecked={this.state.checked} />
            <h1>State is {msg}</h1>
        </div>);
    }
}
export default CheckBox;