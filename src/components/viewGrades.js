import React from "react";
import { Students } from "./students";
import axios from "axios";

//this class is used to view all the students
export class ViewGrades extends React.Component {
    constructor() {
        super();
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

    //students array
    state = {
        students: []
    }

    //renders the students
    render() {
        return (
            <div>
                <h3>Viewing All Grades</h3>
                <Students students={this.state.students} Reload={this.componentDidMount}></Students>
            </div>
        );
    }
}