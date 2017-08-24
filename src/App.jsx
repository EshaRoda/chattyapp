import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';


class App extends Component {

constructor(props) {
  super(props);
  this.state = {
    currentUser: {name: "Esha"},
    messages: []
  };
  //this.onNewPost = this.onNewPost.bind(this);
}

componentDidMount() {
  this.socket = new WebSocket('ws://localhost:3000');
  this.socket.addEventListener('open', () => {
      this.socket.send('it works');
  });
  this.socket.addEventListener('message', (event) => {
    const newMessage = JSON.parse(event.data);
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages});
  });
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
