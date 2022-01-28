import React, { useState, useEffect } from "react";

function validateEmail(email) {
  const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Register() {
  const [isFormProcessing, setFormProcessing] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const processForm = () => {
    setFormProcessing(true)
    const isEmail = validateEmail(email)
    if(!isEmail){
      //Email is not formatted properly
    }
    if(name.length < 3){
      //Name is invalid abeg!
    }
    if(name.length >= 3 && isEmail){
      //Name and email are valid
    }
  }
  return (
    <>
      <div className="auth-container">
        <div className="auth-content flex-column">
          <span className="auth-head text-dark-blue">
            Create an Account
          </span>
          <input type="text" className="auth-input border-dark-blue" spellCheck={false} placeholder="Name"/>
          <input type="text" className="auth-input border-dark-blue" spellCheck={false} placeholder="Email"/>
          <button type="submit" className="bg-dark-blue text-white btn-default"
            onClick={processForm}
          >
            Continue {isFormProcessing && <i className="far fa-spinner-third fa-spin"></i>}
          </button>
        </div>
      </div>
    </>
  );
}
export { validateEmail }