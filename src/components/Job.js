import React from 'react';
import styles from "./Job.module.scss";

class Job extends React.Component {
  state = {
    editing: false,
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    })
  }

  handleUpdatedDone = event => {
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }

  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through"
    }

    const { completed, id, title } = this.props.job;

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return  <li className={styles.job}>
              <div onDoubleClick={this.handleEditing} style={viewMode}>
                <input
                  type='checkbox'
                  className={styles.checkbox}
                  checked={completed}
                  onChange={() => this.props.handleChangeProps(id)}
                />&nbsp;
                <button onClick={() => this.props.deleteJobProps(id)}>
                  Delete
                </button>&nbsp;
                <span style={completed ? completedStyle : null}>
                  {title}
                </span>
              </div>
              <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => {
                  this.props.setUpdate(e.target.value, id)
                }}
                onKeyDown={this.handleUpdatedDone}
              />
            </li>
    ;
  };
}
export default Job;