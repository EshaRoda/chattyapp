import React, {Component} from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';


class MessageList extends Component {
 render() {
  const messages = this.props.messages.map((message) =>{
    if (message.type === "update"){
      return (<Notification
      key={message.id}
      oldUser={message.oldUser}
      newUser={message.newUser}
      />);
    } else {
      return (<Message
      key={message.id}
      username={message.username}
      content={message.content}
      />);
    }
  });

   return (
       <main className="messages">
        { messages }
      </main>

 );
 }
}
export default MessageList;