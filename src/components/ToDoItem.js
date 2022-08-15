/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToDoItem.module.css';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    const { completed, id, title } = this.props.todo;

    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button type="button" onClick={() => this.props.deleteTodoProps(id)}>
            Delete
          </button>
          <span style={this.props.todo.completed ? completedStyle : null}>
            {title}
          </span>
        </div>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    );
  }
}

ToDoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  todo: PropTypes.objectOf(PropTypes.object()).isRequired,
  handleChangeProps: PropTypes.func,
  deleteTodoProps: PropTypes.func,
  setUpdate: PropTypes.func,
};

ToDoItem.defaultProps = {
  handleChangeProps: null,
  deleteTodoProps: null,
  setUpdate: null,
};

export default ToDoItem;
