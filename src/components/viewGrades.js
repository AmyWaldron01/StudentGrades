import React from "react";
import { Students } from "./students";
import axios from "axios";

//this class is used to view all the students
export class ViewGrades extends React.Component {
    constructor() {
        super();
        this.state = {
            students: [],
            isLoggedIn: false
        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    //gets the data from the server
    componentDidMount() {
        axios.get('http://localhost:4000/api/grades')
            .then((response) => {
                this.setState({ students: response.data })
            })
            .catch((error) => {
                console.log(error);
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

    //renders the students
    render() {
        return (
            <div>
                {this.state.isLoggedIn ? (
                    <div>
                        <h3>Viewing All Grades</h3>
                        <Students students={this.state.students} Reload={this.componentDidMount} />
                    </div>
                ) : (

                    //This is the login
                    <form onSubmit={this.handleLoginSubmit}>
                        <div className="form-group">
                            <h3>Please login to view Grades.</h3>
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
