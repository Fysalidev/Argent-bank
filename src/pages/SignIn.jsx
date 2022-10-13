import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logIn } from "../utils/redux/reducers"
/* import ApiServices from "../utils/api/ApiServices"; */
import Api from "../utils/api/ApiServices";



function SignIn() {
  const isUserLogIn = useSelector(state => state.user.login)
  
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [Error, setError] = useState("")
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


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

    if (email.length !== 0 && password.length !== 0) {
      const log = await new Api().logUser(email, password);
      log.status !== 200 ? setError(log.message) : (dispatch(logIn(log.body.token)));
    }
  };

  useEffect(() => {
    if(isUserLogIn){
      navigate('/dashboard')
    }
  },[isUserLogIn]);

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
              onChange={(e) => handleChangeMail(e)}
            />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input
              type="password"
              name="name"
              onChange={(e) => handleChangePassword(e)}
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
          <p>{Error}</p>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
