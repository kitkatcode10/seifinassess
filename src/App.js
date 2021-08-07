import React, { Component } from 'react';
import './App.css';
import Circles from './components/Circles/Circles';
import CircleSelector from './components/CircleSelector/CircleSelector';

const selections = ['1', '2', '3', '4']; 

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      selCircleIdx: 0 
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
        <button onClick={() => this.setState((state) => {
          return {
            selCircleIdx: ++state.selCircleIdx 
          }; 
        })}> 
        Select Circle 1
        </button> 
        <button> Select Circle 2 </button>
        <button> Selection Circle 3 </button> 
        <button> Select Circle 4 </button> 
     
          <CircleSelector selections={selections}/>
            
          <Circles/> 
        </main>
      </div>
    );
  }
}

export default App;