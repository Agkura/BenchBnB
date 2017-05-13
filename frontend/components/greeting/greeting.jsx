import React from 'react';

class Greeting extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let logged;
    if (this.props.currentUser) {
       logged = (
        <ul className="greeting">
          <li><p>Welcome, {this.props.currentUser.username}</p></li>
          <li><button>LogOut</button></li>
        </ul>
      );
    } else {
       logged = (<ul className="greeting">
        <li><button>signup</button></li>
        <li><button>login</button></li>
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
