import React from "react";

export class HomePage extends React.Component {

    //The home page 
    //Tells u the local time and what the app does
    render() {
        return (
            <div>
                <h1>Welcome to Student Repository</h1>
                <h2 > It is {new Date().toLocaleTimeString()}.</h2 >
                <ul>
                    <br></br>
                    <li>Keep track of your Students grades by adding them to a repository</li>
                    <br></br>
                    <li>Add your grades in the "Add Grade" section</li>
                    <br></br>
                    <li>View your added Grades in the "View Grades" section</li>
                    <dl>
                        <dt>Edit</dt>
                        <dd>- Here you can edit an already existing grades</dd>
                        <dt>Delete</dt>
                        <dd>- You may also delete an already existing Grade</dd>
                    </dl>
                </ul>
                <img src='https://th.bing.com/th/id/OIP._yy6Y3uwyXRnQCjCtLE_RgHaHu?pid=ImgDet&rs=1' width="400" height="360"></img>
            </div>
        );
    }
}

