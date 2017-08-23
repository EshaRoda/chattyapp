import React, {Component} from 'react';
import Navbar from './Navbar.jsx';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';


class App extends Component {

constructor(props) {
    super(props);
    this.state = {loading: false};
}

componentDidMount() {
    setTimeout(() => {
      this.setState({loading: true})
    }, 3000)
}

render() {
     <div>
        <Navbar />
        <MessageList />
        <Chatbar />
      </div>
  }
}


export default App;
