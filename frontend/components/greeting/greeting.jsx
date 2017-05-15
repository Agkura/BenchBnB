import React from 'react';
import { Link } from 'react-router-dom';


class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e){
    this.props.logout();
  }


  render(){
    let logged;
    if (this.props.currentUser) {
       logged = (
        <ul className="greeting">
          <li><p>Welcome, {this.props.currentUser.username}</p></li>
          <li><button onClick={this.handleLogout} >LogOut</button></li>
        </ul>
      );
    } else {
       logged = (<ul className="greeting">
        <li><Link to="/signup"><button>signup</button></Link></li>
        <li><Link to="/signin"><button>login</button></Link></li>
      </ul>);
    }
    return(
      <div className="greeting-block">
        {logged}
      </div>
    );
  }
}

export default Greeting;
