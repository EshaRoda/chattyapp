import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
 render() {
   return (
       <main class="messages">
        { messages }
      </main>

 );
 }
}
export default MessageList;