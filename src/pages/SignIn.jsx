import React from "react";
import { useState } from "react";
import {getToken} from "../utils/api/post"


function SignIn() {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [token, setToken] = useState({})

  const handleChangeMail = (e) => {
    const name = e.target.value;
    setMail(name);
  };

  const handleChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleChangeCheckbox = () => {
    setChecked(!checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(email.length !== 0 && password.length !== 0 ){
      const payload = { email: email, password: password };
      setToken(await getToken(payload))
      console.log(token)
    }
  };

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
            onClick={(e) => { handleSubmit(e) }}
          />
        </form>
      </section>
    </main>
  );
}

export default SignIn;
