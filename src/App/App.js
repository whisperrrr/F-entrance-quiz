import React, { Component } from 'react';
import './App.scss';
import StudentListCard from './components/StudentListCard';
import StudentTeamCard from './components/StudentTeamCard';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <StudentTeamCard />
        <StudentListCard />
      </div>
    );
  }
}

export default App;
