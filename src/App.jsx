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
}

componentDidMount() {
    setTimeout(() => {
      this.setState({loading: true})
    }, 3000)
}

render() {

    //if(this.state.loading) {
    //  return <h1>Loading...</h1>
    //} else {
    //  return <h1>3 seconds have elapsed and page is loaded</h1>
    //}

     <div>
        <NavBar />
        <MessageList />
        <Chatbar />
      </div>
  }
}


export default App;
