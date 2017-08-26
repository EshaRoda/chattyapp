import React, {Component} from 'react';

class Notification extends Component {


  render() {
   return (
      <div className="message system">
        {this.props.oldUser} changed their name to {this.props.newUser}
        </div>

     )
 }
}

export default Notification;
