import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddFive} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubFive} />
        <hr />
        <button onClick={this.props.onStoreResult}>Store result</button>
        <ul>
          {this.props.storedResult.map(stored => {
            return (
              <li
                key={stored.id}
                onClick={() => this.props.onDeleteResult(stored.id)}
              >
                {stored.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResult: state.result
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAddFive: () => dispatch({ type: "ADD_FIVE", value: 5 }),
    onSubFive: () => dispatch({ type: "SUB_FIVE", value: 5 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: id => dispatch({ type: "DELETE_RESULT", resultElId: id })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
