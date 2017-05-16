import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property){
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render(){
    let formType = this.props.formType.slice(1);
    let other = formType === 'signin' ? 'signup' : 'signin';
    return(
      <div className="form-block">
        <form className="form" onSubmit={this.handleSubmit}>
          <h3>{formType}</h3>
          <input type="text"
                 value={this.state.username}
                 placeholder="username"
                 onChange={this.update("username")}>
          </input>
          <input type="password"
                 value={this.state.password}
                 placeholder="password"
                 onChange={this.update("password")}>
          </input>
          <input type="submit" value={formType}></input>
          <Link to={"/" + other}>{other}</Link>
        </form>
      </div>
    )
  }
}

export default SessionForm;
