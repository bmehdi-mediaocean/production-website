import React from 'react';
import ProdJobs from './ProdJobs';
import Header from './Header';
import InputJob from "./InputJob";
import { v4 as uuidv4 } from "uuid";

class ProdContainer extends React.Component {
  state = {
    jobs: [
      {
        id: uuidv4(),
        title: 'Hilton',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'Tesco',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Disney',
        completed: false
      }
    ]
  };

  handleChange = id => {
    this.setState(prevState => ({
      jobs: prevState.jobs.map(job => {
        if (job.id === id) {
          return {
            ...job,
            completed: !job.completed
          };
        }
        return job;
      }),
    }));
  };

  delJob = id => {
    this.setState({
      jobs: [
        ...this.state.jobs.filter(job => {
          return job.id !== id;
        })
      ]
    });
  };

  addJobItem = title => {
    const newJob = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      jobs: [...this.state.jobs, newJob]
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputJob 
            jobs={this.state.jobs}
            addJobProps={this.addJobItem}
          />
          <ProdJobs
            jobs={this.state.jobs}
            handleChangeProps={this.handleChange}
            deleteJobProps={this.delJob}
          />
        </div>
      </div>
    )
  };
}

export default ProdContainer;