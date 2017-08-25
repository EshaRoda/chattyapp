import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';


class App extends Component {

constructor() {
  super();
  this.state = {
    currentUser: {name: "Esha"},
    messages: []
  };
   this.onNewPost = this.onNewPost.bind(this);
}

componentDidMount() {
  this.socket = new WebSocket('ws://localhost:3001');
  this.socket.addEventListener('open', () => {
      this.socket.send('it works');
  });
  this.socket.addEventListener('message', (event) => {
    const newMessage = JSON.parse(event.data);
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages});
  });
}

updateCurrentUser(user) {
  if (this.state.currentUser !== user) {
    this.socket.send(JSON.stringify({type: 'update', oldUser: this.state.currentUser, newUser: user}));
    this.setState({currentUser: user});
  }
}

onNewPost(post) {
  this.socket.send(JSON.stringify({type: 'content', content: post, user: this.state.currentUser, color: this.state.color}));
}

render() {
    return (
      <div>
      <NavBar />
      <MessageList messages={this.state.messages} />
      <Chatbar username={this.state.currentUser} />
    </div>
    );
  }
}

export default App;
