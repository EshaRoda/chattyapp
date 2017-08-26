import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';


class App extends Component {

constructor() {
  super();
  this.state = {
    currentUser: "Esha",
    messages: []
  };
  /*this.onNewPost = this.onNewPost.bind(this);*/
  /*this.updateCurrentUser = this.updateCurrentUser.bind(this);*/
}

componentDidMount() {
  this.socket = new WebSocket('ws://localhost:3001');
  this.socket.addEventListener('message', (event) => {
    const newMessage = JSON.parse(event.data);
    console.log(newMessage);

    switch (newMessage.type) {
    case 'count':
      this.setState({userCount: newMessage.userCount});
      /*console.log("User Count = ", userCount);*/
      break;
    default:
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages});
      break;
    }
  });
}

updateCurrentUser = (user) => {
  if (this.state.currentUser !== user) {
    this.socket.send(JSON.stringify({
      type: 'update',
      oldUser: this.state.currentUser,
      newUser: user}));
    this.setState({currentUser: user});
  }
}

onNewPost = (text) => {
  this.socket.send(JSON.stringify({
    type:'message',
    username: this.state.currentUser || 'Anonymous',
    content: text
  }))
}

render() {
    return (
      <div>
      <NavBar userCount={ this.state.userCount } />
      <MessageList messages={this.state.messages} />
      <Chatbar
      username={this.state.currentUser}
      updateCurrentUser={this.updateCurrentUser}
      onNewPost={this.onNewPost}
      />
    </div>
    );
  }
}

export default App;
