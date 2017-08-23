import React, {Component} from 'react';

class ChatBar extends Component {
 render() {


 //console.log("Rendering <App/>");
   return (
       <div>
         <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.username.name} />
        <input className="chatbar-message" placeholder={this.props.messages} />
      </footer>
     </div>
   )
 }
}
export default ChatBar;


