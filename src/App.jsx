import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';


class App extends Component {

constructor() {
  super();
  this.state = {
    // username: 'User ' + Math.ceil(Math.random() * 99),
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
