import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function SignIn() {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [payload, setPayload] = useState({});

  const handleChangeMail = (event) => {
    const name = event.target.value;
    setMail(name);
  };

  const handleChangePassword = (event) => {
    const password = event.target.value;
    setPassword(password);
  };

  const handleChangeCheckbox = () => {
    setChecked(!checked);
  };

  const handleSubmit = () => {
    const payload = { email: email, password: password };
    setPayload(payload);
  };


   useEffect(() => {
    console.log("Mise à jour du payload")
    console.log(payload)
   },[payload]);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label>Username</label>
            <input
              type="email"
              name="name"
              onChange={(event) => handleChangeMail(event)}
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              name="name"
              onChange={(event) => handleChangePassword(event)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChangeCheckbox}
            />
            <label>Remember me</label>
          </div>
          <input
            className="sign-in-button"
            type="submit"
            value="Sign In"
            onSubmit={()=>{handleSubmit()}}
          />
        </form>
      </section>
    </main>
  );
}

export default SignIn;
