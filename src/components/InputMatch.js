import React, { Component } from 'react';

export class InputMatch extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', match: null };
  }

  handleChange = (e) => {
    const val = e.target.value;
    const result = this.props.pattern.test(val);
    this.setState({ value: val, match: result });
  };

  render() {
    return (
      <div>
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          style={
            !this.state.value
              ? emptyStyle
              : this.state.match
              ? correctStyle
              : incorrectStyle
          }
          onFocus={(e) => e.target.style.backgroundColor = 'rgb(245, 245, 245)'}
          onBlur={(e) => e.target.style.backgroundColor = 'rgb(255, 255, 255)'}
        />
      </div>
    );
  }
}

const emptyStyle = {borderRadius: '5px 5px'}
const correctStyle = { border: '2px solid green', borderRadius: '5px 5px' }
const incorrectStyle = { border: '2px solid red', borderRadius: '5px 5px' }

export default InputMatch;
