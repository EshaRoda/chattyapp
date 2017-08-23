import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';


class App extends Component {

constructor() {
  super();
  this.state = {
    // username: 'User ' + Math.ceil(Math.random() * 99),
    currentUser: {name: "Bob"},
    messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
  };
  //this.onNewPost = this.onNewPost.bind(this);
}

componentDidMount() {
  this.socket = new WebSocket("ws:localhost:3001");
  socket.addEventListener('open', () => {
      // this.socket.send('it works');
  });
  // this.socket.addEventListener('message', (event) => {
  //   console.log("Connected to server");
  // });
}
    // setTimeout(() => {
    //   this.setState({loading: true})
    // }, 3000)

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
