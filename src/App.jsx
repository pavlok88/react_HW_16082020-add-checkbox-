import React, { Component } from 'react';
import UserList from './components/UserList/UserList';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <UserList />;
  }
}

export default App;
