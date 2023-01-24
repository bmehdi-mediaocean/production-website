import React from 'react';
import styles from "./Job.module.scss";

class Job extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through"
    }

    const { completed, id, title } = this.props.job;

    return  <li className={styles.job}>
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
            </li>
    ;
  };
}
export default Job;