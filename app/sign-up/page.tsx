"use client";

import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function signUp() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });
  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    if( event.target.name === 'username') {
       setValues({...values, username: event.target.value});
    }
    if( event.target.name === 'email') {
       setValues({...values, email: event.target.value});
    }
    if( event.target.name === 'password') {
       setValues({...values, password: event.target.value});
    }
  }
  console.log(values);
  const signUp = async () => {
   await fetch("http://localhost:8080/signup"), { 
    method: "POST",
    body: JSON.stringify(values),
   }
  }
  return (
    <div> 
      <h1>Sign Up</h1>
      <Input placeholder="Username" name="username" value={values.username} onChange={handleValue}/>
      <Input placeholder="Email" name="email" value={values.email} onChange={handleValue}/>
      <Input placeholder="Password" type="password" name="password" value={values.password} onChange={handleValue}/>
      <Button onClick={signUp}>Sign Up</Button>
    </div>
   )
   
}