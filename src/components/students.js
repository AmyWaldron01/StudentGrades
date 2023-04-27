import React from "react";
import { StudentItem } from './StudentItem';

export class Students extends React.Component {
    render() {
        return this.props.students.map(
            (student) => {
                // returns a new array of elements from student item
                return <StudentItem student={student} key={student._id} Reload={this.props.Reload}></StudentItem>
            }
        );
    }
}