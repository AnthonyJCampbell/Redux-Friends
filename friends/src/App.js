import React, { Component } from 'react';
import './styles/App.css';
import FriendForm from './Components/FriendForm';
import FriendsList from './Components/FriendsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
