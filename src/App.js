import React, { Component } from 'react';
import Navbar from './components/navbar'
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
// create functon in the parent component for the child to call 
// the component that owns the state should be the one modifying it

// creating a function by getting rid of the state object in the child component
//  this needs to be done when there are thruty confusions
// cloning the array using the spread operator
handleIncrement = counter => {
  const counters = [...this.state.counters]
  const index = counters.indexOf(counter)
  counters[index] = {...counter};
  counters[index].value++;
  this.setState({counters});
  console.log(counters)
}

handelDecrement = counter => {
  const counters = [...this.state.counters]
  const index = counters.indexOf(counter)
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters});
  console.log(counters)
}

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters})
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters })
  }
  render() {
  return (
    <React.Fragment>
      {/* assigning the navbar a nmber of component that have been incremented. use the filter method */}
      <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
      <main className="container">
        <Counters 
        // is a controlled component, gets data and modifys by the parent component
        // assigning variables to the function names
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handelDecrement}
        onDelete={this.handleDelete}/>
      </main>
    </React.Fragment>
  );
}
}

export default App;
