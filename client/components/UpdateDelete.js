import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFellow, deleteFellow } from '../store';

class UpdateDelete extends Component {
  constructor() {
    super();
    this.state = { name: '' };
    this.save = this.save.bind(this)
  }
  save(ev) {
      ev.preventDefault();
      this.props.updateFellow({ name: this.state.name, id: this.props.match.params.id, history: this.props.history });
  }
  componentDidMount() {
    const fellow = this.props.fellows.find(
      (f) => f.id === this.props.match.params.id * 1
    );
    if (fellow) {
      this.setState({ name: fellow.name });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.fellows.length && prevProps.fellows.length === 0) {
      const fellow = this.props.fellows.find(
        (f) => f.id === this.props.match.params.id * 1
      );
      if (fellow) {
        this.setState({ name: fellow.name });
      }
    }
  }

  render() {
    const { name } = this.state;
    const { save } = this;

    return (
      <div>
        <form onSubmit={ save }>
          <input
            value={name}
            onChange={(ev) => this.setState({ name: ev.target.value })}
          />
          <button>Update Fellow</button>
        </form>
        <div>
          <button
            onClick={() =>
              this.props.destroy({
                id: this.props.match.params.id,
                history: this.props.history,
              })
            }
          >
            Delete Fellow
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  ({ fellows }) => {
    return { fellows };
  },
  (dispatch) => {
    return {
      updateFellow: (fellow) => {
        dispatch(updateFellow(fellow));
      },
      destroy: (obj) => {
        dispatch(deleteFellow(obj));
      },
    };
  }
)(UpdateDelete);
