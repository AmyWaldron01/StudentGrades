import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//edit component
export function Login() {

    var password = "admin";
    var username = "admin";

    const handleSubmit = (e) => {
        e.preventDefault();

        const inputuser = document.getElementById("inputUser").value;
        const inputpass = document.getElementById("inputPass").value;

        if (inputuser === username && inputpass === password) {
            // Successful login
            alert("Login successful");
        } else {
            // Failed login
            alert("Invalid username or password");
        }


    }


    //display the data
    return (
        <div>
            <h3>login </h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Lecture Username: </label>
                    <input type="text" className="form-control" id="inputUser" />
                </div>

                <div className="form-group">
                    <label>Password </label>
                    <input type="text" className="form-control" id="inputPass" />
                </div>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    );
}