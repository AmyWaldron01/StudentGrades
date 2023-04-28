import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//All pages options
import { HomePage } from './components/homePage';
import { ViewGrades } from './components/viewGrades';
import { AddGrades } from './components/addGrades';
// import { Login } from './components/login';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { EditStudents } from './components/editStudents';

//Main App
class App extends React.Component {
  render() {
    return (
      <Router>
        {/* Nav bar */}
        <div className="App">
          <Navbar bg="danger" variant="dark">
            <Container>
              <Navbar.Brand href="/">GRADES</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/viewGrades">View Grades</Nav.Link>
                <Nav.Link href="/addGrades">Add Grades</Nav.Link>
                {/* <Nav.Link href="/login">Login</Nav.Link> */}

              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<HomePage></HomePage>}></Route>
            <Route path='/viewGrades' element={<ViewGrades></ViewGrades>}></Route>
            <Route path='/addGrades' element={<AddGrades></AddGrades>}></Route>
            <Route path='/editStudents/:id' element={<EditStudents></EditStudents>}></Route>
            {/* <Route path='/login' element={<Login></Login>}></Route> */}
          </Routes>
          {/* used  for comments */}
        </div>
      </Router>
    );
  }
}

export default App;
