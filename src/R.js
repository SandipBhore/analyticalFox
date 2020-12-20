import React from "react";
import "./Registraion.css";


class R extends React.Component {
  
  state={

  }
  

  render() {
    
      return (
        <div className="reg">
          <form onsubmit="event.preventDefault();">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User id</label>
              <input
                type="text"
                className="form-control"
                
                placeholder={this.props.location.object.Username}
                
                
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder={this.props.location.object.Password}
                
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder={this.props.location.object.email}
                
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="number"
                className="form-control"
                placeholder={this.props.location.object.Phone}
                

              />
            </div>
            <div className="form-group">
              <fieldset >
                <legend>Choose your gender:</legend>
                <label>Male</label>
                <input
                  className="mr-3"
                  type="radio"
                  name="gender"
                  id="male"
                  defaultValue="male"
                  defaultChecked
                  readOnly
                  
                />
                <label htmlFor="female">Female</label>
                <input
                  className="mr-3"
                  type="radio"
                  name="gender"
                  id="female"
                  defaultValue="female"
                  readOnly
                />
                <label>Other</label>
                <input
                  className="mr-3"
                  type="radio"
                  name="gender"
                  id="other"
                  defaultValue="other"
                  
                  readOnly
                />
              </fieldset>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder={this.props.location.object.Address}
                readOnly
                
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
                  placeholder={this.props.location.object.salary}
                
                  type="text"
                  

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

export default R;
