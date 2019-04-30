import React, { Component } from 'react';

import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {

  state = { 
    counters: [
        {id:1, value: 89}, 
        {id:2, value: 0}, 
        {id:3, value: 0}, 
        {id:4, value: 0}
    ]
  }

  handleIncrement = (counter) => {

      const counters = [...this.state.counters];

      const index = counters.indexOf(counter);

      counters[index] = {...counter};

      counters[index].value++;
              
      this.setState({ counters });
  };

  handleReset = () => {

      const counters = this.state.counters.map(counter => {
          counter.value = 0;

          return counter;
      });

      this.setState({ counters });
  }

  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
  }

  render() {

    return (
      <React.Fragment>
        <NavBar 
          totalCounter={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
           />
        </main>
      </React.Fragment> 
    );
  }
}
export default App;
