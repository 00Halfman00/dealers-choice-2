import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFellow } from '../store';

console.log('hola ', createFellow);
class CreateFellow extends Component {
  constructor() {
    super();
    this.state = { name: '' };
    this.saveFellow = this.saveFellow.bind(this);
  }

  saveFellow(ev) {
    ev.preventDefault();
    this.props.createFellow({ name: this.state.name });
  }

  render() {
    const { name } = this.state.name;
    const { saveFellow } = this;
    return (
      <div>
        <form onSubmit={saveFellow}>
          <input
            value={name}
            onChange={(ev) => this.setState({ name: ev.target.value })}
          />
          <button>Create Fellow</button>
        </form>
      </div>
    );
  }
}

export default connect(null, (dispatch) => {
  return {
    createFellow: (fellow) => {
      dispatch(createFellow(fellow));
    },
  };
})(CreateFellow);
