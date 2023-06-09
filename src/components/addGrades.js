import React from "react";
import axios from "axios";
import 'reactjs-popup/dist/index.css';


export class AddGrades extends React.Component {

    //handles the submit event
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeStudent = this.onChangeStudent.bind(this);
        this.onChangeModule = this.onChangeModule.bind(this);
        this.onChangeAsst1 = this.onChangeAsst1.bind(this);
        this.onChangeAsst2 = this.onChangeAsst2.bind(this);
        this.onChangeproject = this.onChangeproject.bind(this);

        this.state = {
            student: '',
            module: '',
            asst1: '',
            asst2: '',
            project: '',
            isLoggedIn: false
        }
    }

    //handles the submit event
    handleSubmit(e) {
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.student},
        ${this.state.module},
        ${this.state.asst1}
        ${this.state.asst2}
        ${this.state.project} `
        );

        const grade = {
            student: this.state.student,
            module: this.state.module,
            asst1: this.state.asst1,
            asst2: this.state.asst2,
            project: this.state.project

        }

        //sends the data to the server
        axios.post('http://localhost:4000/api/grades', grade)
            .then()
            .catch();

        this.setState({
            student: '',
            module: '',
            asst1: '',
            asst2: '',
            project: ''
        })
    }

    //handles the change event
    onChangeStudent(e) {
        this.setState({
            student: e.target.value
        })
    }
    onChangeModule(e) {
        this.setState({
            module: e.target.value
        })
    }
    onChangeAsst1(e) {
        this.setState({
            asst1: e.target.value
        })
    }

    onChangeAsst2(e) {
        this.setState({
            asst2: e.target.value
        })
    }


    onChangeproject(e) {
        this.setState({
            project: e.target.value
        })
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();

        const username = "admin";
        const password = "admin";

        const inputuser = document.getElementById("inputUser").value;
        const inputpass = document.getElementById("inputPass").value;

        if (inputuser === username && inputpass === password) {
            // Successful login
            alert("Login successful");
            this.setState({ isLoggedIn: true });
        } else {
            // Failed login
            alert("Invalid username or password");
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn ? (
                    <div>
                        <h3>Add Your New Grades!</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Add Student Name: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.student}
                                    onChange={this.onChangeStudent}
                                />
                            </div>
                            <div className="form-group">
                                <label>Add Module : </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.module}
                                    onChange={this.onChangeModule}
                                />
                            </div>
                            <div className="form-group">
                                <label>Add Assignment 1: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.asst1}
                                    onChange={this.onChangeAsst1}
                                />
                            </div>
                            <div className="form-group">
                                <label>Add Assignment 2: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.asst2}
                                    onChange={this.onChangeAsst2}
                                />
                            </div>
                            <div className="form-group">
                                <label>Add Project: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.project}
                                    onChange={this.onChangeproject}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Add Grade"
                                    className="btn btn-primary"
                                />
                            </div>
                        </form>
                    </div>
                ) : (

                    //This is the login
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className="form-group">
                            <h3>Please login to add Grades.</h3>
                            <label htmlFor="inputUser">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputUser"
                                placeholder="Enter username"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPass">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPass"
                                placeholder="Enter password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                )}
            </div>
        );
    }
}
