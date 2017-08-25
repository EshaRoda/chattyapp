import React, {Component} from 'react';

class ChatBar extends Component {



  handleInput = (event) => {
    if (event.key === 'Enter') {
      this.props.onNewPost(event.target.value);
      event.target.value = '';
    }
  }

 render() {
  return (
       <div>
         <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.username.name} onBlur={this.getUser} defaultValue={this.props.currentUser} />
        <input className="chatbar-message" placeholder={this.props.messages} />
      </footer>
     </div>
   )
 }
}
export default ChatBar;


