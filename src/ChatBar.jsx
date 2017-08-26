import React, {Component} from 'react';

class ChatBar extends Component {

  handleInput = (event) => {
    if (event.key === 'Enter') {
      this.props.onNewPost(event.target.value);
      event.target.value = '';
    }
  }

  handleUserName = (event) => {
    if (event.key === 'Enter') {
      this.updateUserName(event);

    }
  }

  updateUserName = (event) => {
    this.props.updateCurrentUser(event.target.value);

  }

 render() {
  return (
       <div>
         <footer className="chatbar">
        <input className="chatbar-username"
        placeholder={this.props.username}
        defaultValue={this.props.username}
        onKeyDown={this.handleUserName}
        onBlur={this.updateUserName} />
        <input className="chatbar-message"
        placeholder={this.props.messages}
        onKeyDown={this.handleInput} />
      </footer>
     </div>
   )
 }
}
export default ChatBar;


