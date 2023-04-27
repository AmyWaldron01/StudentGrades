import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//edit component
export function EditStudents() {
    let { id } = useParams();
    const [student, setStudent] = useState('');
    const [module, setModule] = useState('');
    const [asst1, setAsst1] = useState('');
    const [asst2, setAsst2] = useState('');
    const [project, setProject] = useState('');


    //get the data from the database
    useEffect(() => {
        axios.get('http://localhost:4000/api/grade/' + id)
            .then((response) => {
                setStudent(response.data.student);
                setModule(response.data.module);
                setAsst1(response.data.asst1);
                setAsst2(response.data.asst2);
                setProject(response.data.project);
            })
            .catch()
    }, []);

    //submit the data to the database
    const handleSubmit = (e) => {
        e.preventDefault();

        //pop up with new data entered
        alert("---------------EDIT CONFIRMED--------------\n" + "Student Name: " + student + "\nExam Module: "
            + module + "\nExam Result 1: " + asst1 + "\nExam Result 2: " + asst2 + "\nProject Result: " + project);

        const editStudent = {
            student: student,
            module: module,
            asst1: asst1,
            asst2: asst2,
            project: project
        }

        //send the data to the server
        axios.put('http://localhost:4000/api/grade/' + id, editStudent)
            .then()
            .catch();
    }


    //display the data
    return (
        <div>
            <h3>Edit component</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Student Name: </label>
                    <input type="text"
                        className="form-control"
                        value={student}
                        onChange={(e) => { setStudent(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Module Name: </label>
                    <input type="text"
                        className="form-control"
                        value={module}
                        onChange={(e) => { setModule(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Grade 1: </label>
                    <input type="text"
                        className="form-control"
                        value={asst1}
                        onChange={(e) => { setAsst1(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Grade 2: </label>
                    <input type="text"
                        className="form-control"
                        value={asst2}
                        onChange={(e) => { setAsst2(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Project Grade: </label>
                    <input type="text"
                        className="form-control"
                        value={project}
                        onChange={(e) => { setProject(e.target.value) }}
                    />
                </div>


                <input type="submit" value="Edit Grades"></input>
            </form>
        </div>
    );
}