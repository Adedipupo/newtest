import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./index.css"

export default function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful");
  }


  console.log("email",email);
  console.log("password",password);
    return (
      <div className="login">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email :</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password :</Label>
            <Input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }


