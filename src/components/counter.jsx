import React, { Component } from "react";

class Counter extends Component {
  /* My Object */
  state = {
    // value: this.props.counters.value
    // tags: ['tag1', 'tag2', 'tag3', 'tag4']
  };
  styles = {
    fontSize: 16,
    fontweight: "bold"
  };

  render() {
    return (
      <div>
        {/*<span style={this.styles} className={this.state.count===0? 'badge badge-warning m-2' : 'badge badge-primary m-2'}>{this.formatCount()}</span>*/}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          style={this.styles}
          className="btn btn-secondary btn-sm mr-1 pr-3 pl-3"
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
        >
          {" "}+{" "}
        </button>
        <button
          style={this.styles}
          className="btn btn-secondary btn-sm mr-1 pr-3 pl-3"
          onClick={() => {
            this.props.onDincrement(this.props.counter);
          }}
          disabled={(this.props.counter.value > 0)? false : true}
        >
          {" "}-{" "}
        </button>
        <button
          style={this.styles}
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >Delete</button>

        {/*<hvalue: this.props.counters.valuevalue: this.props.counters.value3>List of Tags</h3>*/}
        {/*<ul>*/}
        {/*{this.state.tags.map(value => {*/}
        {/*return <li key={value}>{value}</li>*/}
        {/*})}*/}
        {/*</ul>*/}
      </div>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  /* my method */
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
