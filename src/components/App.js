import React from 'react'
import Counter from './counter';
import Timer from './timer';
// import Profile from './profile';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter/>
        <Timer/>
      </div>
    );
  }
}

export default App;
