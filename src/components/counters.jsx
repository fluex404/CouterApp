import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  
  render() {
    const {onDincrement, onDelete, onIncrement, onReset, counters} = this.props;
    return (
      <div>
        <button
          className="btn btn-primary float-left"
          onClick={onReset}
        > <span className="badge badge-light mr-1">{counters.filter(c=>c.value > 0).length}</span>
          Reset
        </button>
        <br />
        <div className="mt-3">
          {this.props.counters.map(c => {
            return (
              <Counter
                key={c.id}
                counter={c}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDincrement={onDincrement}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Counters;
