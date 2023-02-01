import React from 'react';
import Job from './Job';

class ProdJobs extends React.Component {
  render() {
    return (
        <ul>
            {this.props.jobs.map(job => (
                <Job
                  key={job.id}
                  job={job}
                  handleChangeProps={this.props.handleChangeProps}
                  deleteJobProps={this.props.deleteJobProps}
                  setUpdate={this.props.setUpdate}
                />
            ))}
        </ul>
    );
  };
}

export default ProdJobs;