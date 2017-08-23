import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';


class App extends Component {

constructor() {
  super();
  this.state = {
    currentUser: {name: "Esha"},
    messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
  };
  //this.onNewPost = this.onNewPost.bind(this);
}

componentDidMount() {
  this.socket = new WebSocket('ws://localhost:3000');
  this.socket.addEventListener('open', () => {
      this.socket.send('it works');
  });
  setTimeout(() => {
    console.log("Simulating incoming message");
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }, 3000);
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
