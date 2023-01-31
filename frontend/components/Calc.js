import React, { Component } from "react";
import { connect } from "react-redux";

class Calc extends Component {
  style = {
    fontSize: "12pt",
    padding: '5px 10px'
  }

  constructor(props){
    super(props);
    this.state = {
      input: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.doAction = this.doAction.bind(this);
    this.reset = this.reset.bind(this);
  }

  onChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  onKeyPress(e){
    if (e.keyCode == 13) {
      this.doAction(e);
    }
  }

  doAction(){
    this.setState({
      input: '',
    });
    return this.props.dispatch({type: 'ENTER', value: this.state.input});
  }

  reset(){
    this.setState({
      input: '',
    });
    return this.props.dispatch({type: 'RESET' });
  }

  render() {
    let result = [];
    let n = this.props.data.length;
    for(let i = 0; i < n; i++) {
      result.push(
        <tr ley={i}>
          <th>{this.props.data[i]}</th>
          <th>{this.props.number[i]}</th>
        </tr>
      );
    }

    return(
      <div>
        <p>Total: {this.props.result}</p>
        <input type="text" style={this.style} size="40" value={this.state.input} onChange={this.onChange} onKeyPress={this.onKeyPress} />
        <button style={this.style} onClick={this.reset}>Reset</button>
        <hr />
        <table>
          <tbody>{result}</tbody>
        </table>
        <p>{this.props.message}</p>
      </div>
    )
  }
}
Calc = connect((state)=> state)(Calc);
export default Calc;
