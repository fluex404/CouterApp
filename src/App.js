import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";

// function Siswa(props){
//   return <div>
//       <p>Nama : {props.name}</p>
//       <p>Umur : {props.age}</p>
//     </div>
// }

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id != counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDincrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({counters});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>React App</h3>
          <Counters counters={this.state.counters} onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement} onDincrement={this.handleDincrement}/>
        </header>
      </div>
    );
  }
}

export default App;
