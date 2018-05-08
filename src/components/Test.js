import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';


class Test extends Component {
    constructor(props) {
        super();

        this.state = {
            Int: props.int
        }

    }

    increaseMe() {
        this.setState({
            Int: this.state.Int + 3
        });
    }


    render() {

        return (
            <div>
                <div className="modal" id="demo" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#demo">Show Modal</button>
                <div className="alert alert-success alert-dismissable fade show">
                    <button type="button" classNameName="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <a href="#" classNameName="alert-link">
                        Click Me! </a>


                </div>

                hello world {this.state.Int}

                <button onClick={this.increaseMe.bind(this)}> Increase me</button> <br />
                our link is: {this.props.homelink} <br />
                <div className="row justify-content-around align-items-center check">
                    <div className=" offset-lg-3 offset-md-2 offset-sm-1 offset-xs-0 col-sm-3 text">
                        hello
            </div>
                    <div className="col-sm-3 text">
                        hello
            </div>

                    <div className="col-sm-3 text ">
                        hello
            </div>
                </div>
                <nav classNameName="navbar navbar-reverse bg-reverse">
                    <a href="#" classNameName="nav-brand">Academind</a>
                    <ul className="navbar-nav mr-auto">
                        <li><a href="">Users</a></li>
                        <li><a href="">Users</a></li>
                        <li><a href="">Users</a></li>
                    </ul>
                </nav>
                <div>
                <div id="wowslider-container1">
<div class="ws_images"><ul>
		<li><img src="data1/images/hongkong1081704.jpg" alt="Hong Kong" title="Hong Kong" id="wows1_0"/></li>
		<li><img src="data1/images/london830775.jpg" alt="London" title="London" id="wows1_1"/></li>
		<li><img src="data1/images/new_york.jpg" alt="New York" title="New York" id="wows1_2"/></li>
		<li><img src="data1/images/shanghai.jpg" alt="Shanghai" title="Shanghai" id="wows1_3"/></li>
	</ul></div>
	<div class="ws_bullets"><div>
		<a href="#" title="Hong Kong"><span><img src="data1/tooltips/hongkong1081704.jpg" alt="Hong Kong"/>1</span></a>
		<a href="#" title="London"><span><img src="data1/tooltips/london830775.jpg" alt="London"/>2</span></a>
		<a href="#" title="New York"><span><img src="data1/tooltips/new_york.jpg" alt="New York"/>3</span></a>
		<a href="#" title="Shanghai"><span><img src="data1/tooltips/shanghai.jpg" alt="Shanghai"/>4</span></a>
	</div></div>
<div class="ws_shadow"></div>
</div>	
<script type="text/javascript" src="engine1/wowslider.js"></script>
<script type="text/javascript" src="engine1/script.js"></script>


                <form className="needs-validation" novalidate>
  <div classNameName="form-row">
    <div className="col-md-4 mb-3 control">
      <label for="validationTooltip01">First name</label>
      <input type="text" className="form-control" id="validationTooltip01" placeholder="First name" value="Mark"  />
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" className="form-control" id="validationTooltip02" placeholder="Last name" value="Otto"  />
      <div className="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label for="validationTooltipUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend"  />
        <div className="invalid-tooltip">
          Please choose a unique and valid username.
        </div>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label for="validationTooltip03">City</label>
      <input type="text" className="form-control" id="validationTooltip03" placeholder="City"  />
      <div className="invalid-tooltip">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationTooltip04">State</label>
      <input type="text" className="form-control" id="validationTooltip04" placeholder="State"  />
      <div className="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label for="validationTooltip05">Zip</label>
      <input type="text" className="form-control" id="validationTooltip05" placeholder="Zip"  />
      <div className="invalid-tooltip">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>
                        </div>
                        </div>

                        );
                
                
                    }
                
                
                }
                
export default Test;