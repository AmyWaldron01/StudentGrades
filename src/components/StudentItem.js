import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class StudentItem extends React.Component {

    constructor() {
        super();
        //binds the delete method to the component
        this.DeleteGrade = this.DeleteGrade.bind(this);
    }


    DeleteGrade(e) {
        e.preventDefault();

        //deletes the student from the database
        axios.delete('http://localhost:4000/api/grade/' + this.props.student._id)
            .then((res) => { this.props.Reload(); })
            .catch();
    }

    calculateGrade(grade) {
        var x = parseInt(grade);
        switch (true) {
            case x >= 90:
                return "A";
            case x >= 80 && x <= 89:
                return "B";
            case x >= 70 && x <= 79:
                return "C";
            case x >= 60 && x <= 69:
                return "D";
            case x <= 50 && x >= 0:
                return "F";
            default:
                return "NOT VALID"
        }
    }

    render() {
        //returns + prints out the student information 
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.student.student}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <footer >
                                {this.props.student.module}
                            </footer>
                            <footer >
                                Assesment 1 Mark: {this.props.student.asst1}%. You Got {this.props.student.asst1 / 100 * 25}% out of 25%<br></br>
                                Assesment 2 Mark: {this.props.student.asst2}%. You Got {this.props.student.asst2 / 100 * 25}% out of 25%<br></br>
                                Project Mark: {this.props.student.project}%. You Got {this.props.student.project / 100 * 50}% out of 50%<br></br>
                            </footer>
                            <footer>Your Grade is: {this.calculateGrade(((this.props.student.asst1 / 100) * 25) + ((this.props.student.asst2 / 100) * 25) + ((this.props.student.asst2 / 100) * 50))}</footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/editStudents/' + this.props.student._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteGrade}>Delete</Button>
                    <br></br>
                </Card>
            </div>
        );
    }
}
