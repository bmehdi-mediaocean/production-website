import React, { Component } from "react";

class InputJob extends Component {
    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addJobProps(this.state.title);
            this.setState({
                title: ""
            });
        } else {
            alert("Please write job");
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input
                    type="text"
                    className="input-text"
                    placeholder="Add Job..."
                    value={this.state.title}
                    name="title"
                    onChange={this.onChange}
                />&nbsp;
                <button className="input-submit">Submit</button>
            </form>
        );
    };
}

export default InputJob;