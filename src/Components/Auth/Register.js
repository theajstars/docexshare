import React, { useState, useEffect } from "react";
import {useToasts} from "react-toast-notifications";
import {motion} from "framer-motion";
function validateEmail(email) {
  const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Register() {
  useEffect(() => {
    document.title = 'Create an account - Docexshare'
  }, [])
  const { addToast, removeAllToasts } = useToasts()
  const [isFormProcessing, setFormProcessing] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [displayVerificationDialog, setDisplayVerificationDialog] = useState(false)
  const processForm = () => {
    const isEmail = validateEmail(email)
    if(!isEmail){
      //Email is not formatted properly
      addToast("Please enter a valid email!", {
        appearance: "warning",
        autoDismiss: true
      })
    }
    if(name.length < 3){
      //Name is invalid abeg!
      addToast("Please enter your full name!", {
        appearance: "warning",
        autoDismiss: true
      })
    }
    if(name.length >= 3 && isEmail){
      //Name and email are valid
      removeAllToasts()
      setFormProcessing(true)
      //Send email token and display verify dialog
      setDisplayVerificationDialog(true)
    }
  }
  return (
    <>
      {/*<motion.div*/}
      {/*  className="bg-overlay"*/}
      {/*  initial={{*/}
      {/*    scale: 0*/}
      {/*  }}*/}
      {/*  animate={{*/}
      {/*    scale: 1,*/}
      {/*    duration: 3000*/}
      {/*  }}*/}
      {/*  ></motion.div>*/}
      <div className="auth-container">
        {!displayVerificationDialog && (
            <motion.div className="auth-content flex-column">
              <span className="auth-head text-dark-blue">
                Create an Account
              </span>
              <input type="text"
                 className="auth-input border-dark-blue"
                 spellCheck={false} placeholder="Name"
                 value={name}
                 onChange={(e) => setName(e.target.value)}
              />
              <input type="text"
                className="auth-input border-dark-blue"
                spellCheck={false} placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="bg-dark-blue text-white btn-default"
                onClick={processForm}
              >
                Continue {isFormProcessing && <i className="far fa-spinner-third fa-spin"></i>}
              </button>
            </motion.div>
        )}
        {displayVerificationDialog && (
            <motion.div className="verify-content bg-white"
              animate={{
                scale: displayVerificationDialog ? 1 : 0,
                rotate: 360
              }}
              transition={{
                delay: 3,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 2 },
              }}
            >

            </motion.div>
        )}
      </div>
    </>
  );
}
export { validateEmail }