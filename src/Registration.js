import React from "react";
import "./Registraion.css";


class Registration extends React.Component {
  state = {
    
    Username: "",
    Password: "",
    Email: "",
    Phone: "",
    Address:"",
    Gender: "",
    salary: "",
    editable:'true'
  }
  submit(){
    this.setState({editable:false})
  }
  

  render() {
    if (this.editatble=='true') {
      return (
        <div className="reg">
        {/* onSubmit={(e) => {()=>{this.setState(()=>{editatble:false})}; e.preventDefault();}} */}
          <form onsubmit="event.preventDefault()">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User id</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                required
                onChange={(event) => {
                  this.setState({ Username: event.target.value });
              
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
                onChange={(event) => {
                  this.setState({ Password: event.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Number"
                required
                onChange={(event) => {
                  this.setState({ Phone: event.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <fieldset required
                data-role="controlgroup "
                onChange={(event) => {
                  this.setState({ Gender: event.target.value });
                }}
              >
                <legend>Choose your gender:</legend>
                <label>Male</label>
                <input
                  className="mr-3"
                  type="radio"
                  name="gender"
                  id="male"
                  defaultValue="male"
                  defaultChecked
                />
                <label htmlFor="female">Female</label>
                <input
                  className="mr-3"
                  type="radio"
                  name="gender"
                  id="female"
                  defaultValue="female"
                />
                <label>Other</label>
                <input
                  className="mr-3"
                  type="radio"
                  name="gender"
                  id="other"
                  defaultValue="other"
                />
              </fieldset>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="address"
                required
                onChange={(event)=>{this.setState({Address: event.target.value});}}
              />
            </div>
            <div className="form-group">
              <div className="input">
                <label htmlFor="salary">Salary</label>
                <input
                  className="inp_cont"
                  type="number"
                  id="salary"
                  name="salary"
                  placeholder="Enter your salary"
                  required
                  type="text"

                  onChange={(event)=>{this.setState({salary: event.target.value});}}/>
              </div>
            </div>

            
            
            
            <button onClick={this.submit} className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="reg">
          <form onsubmit="event.preventDefault();">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User id</label>
              <input
                type="text"
                className="form-control"
                value={this.state.placeholder}
                contenteditable="false"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder={this.state.Password}
                contenteditable="false"
                required
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder={this.state.placeholder}
                contenteditable="false"
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="number"
                className="form-control"
                placeholder={this.state.Phone}
                contenteditable="false"
                required
              />
            </div>
            <div className="form-group">
              <fieldset required>
                <legend>Choose your gender:</legend>
                <label>Male</label>
                <input
                  className="mr-3"
                  type="radio"
                  name="gender"
                  id="male"
                  defaultValue="male"
                  defaultChecked
                  contenteditable="false"
                  
                />
                <label htmlFor="female">Female</label>
                <input
                  className="mr-3"
                  type="radio"
                  name="gender"
                  id="female"
                  defaultValue="female"
                  contenteditable="false"
                />
                <label>Other</label>
                <input
                  className="mr-3"
                  type="radio"
                  name="gender"
                  id="other"
                  defaultValue="other"
                  contenteditable="false"
                />
              </fieldset>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="address"
                contenteditable="true"
                required
              />
            </div>
            <div className="form-group">
              <div className="input">
                <label htmlFor="salary">Salary</label>
                <input
                  className="inp_cont"
                  type="Number"
                  id="salary"
                  name="salary"
                  placeholder="Enter your salary"
                  required
                  type="text"
                  contenteditable="false"

                />
              </div>
            </div>

            
            
            
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}
export default Registration;
