import './App.css';
import React, { useState, useEffect } from "react";
import Select from "react-select"

var batchTime = [
          {
              value: 1,
              label: "6AM - 7AM"
          },
          {
            value: 2,
            label: "7AM - 8AM"
          },
          {
            value: 3,
            label: "8AM - 9AM"
          },
          {
            value: 4,
            label: "5PM - 6PM"
          }
]




function App() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [DateOfBirth, setDOB] = useState('');
  const [password, setNamePassword] = useState('');
  const [selectBatch, setBatch] = useState('');
  return (
    <div className="App">
      <h1>Sign up!</h1>
      <div className='form'>
        <label>Name:</label>
        <input type = "text" name= "user_name" />
        <label>E-mail:</label>
        <input type = "text" name= "Email"/>
        <label>Date Of Birth:</label>
        <input type = "Date" name= "D.O.B"/>
        <label>Password:</label>
        <input type = "text" name= "password" />
        <label>Select Batch:</label>
        <Select options={batchTime}></Select>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;


// import Form from "react-bootstrap/Form";

// import Button from "react-bootstrap/Button";


// export default function Login() {

//   const [email, setEmail] = useState("");

//   const [password, setPassword] = useState("");

//   function validateForm() {

//     return email.length > 0 && password.length > 0;

//   }

//   function handleSubmit(event) {

//     event.preventDefault();

//   }

//   return (

//     <div className="Login">

//       <Form onSubmit={handleSubmit}>

//         <Form.Group size="lg" controlId="email">

//           <Form.Label>Email</Form.Label>

//           <Form.Control

//             autoFocus

//             type="email"

//             value={email}

//             onChange={(e) => setEmail(e.target.value)}

//           />

//         </Form.Group>

//         <Form.Group size="lg" controlId="password">

//           <Form.Label>Password</Form.Label>

//           <Form.Control

//             type="password"

//             value={password}

//             onChange={(e) => setPassword(e.target.value)}

//           />

//         </Form.Group>

//         <Button block size="lg" type="submit" disabled={!validateForm()}>

//           Login

//         </Button>

//       </Form>

//     </div>

//   );

// }