import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logIn, setUser } from "../utils/redux/reducers"
import Api from "../utils/api/Api"

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false)
  const [Error, setError] = useState("")


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
    e.preventDefault();

    if (email.length !== 0 && password.length !== 0) {

      setError("");

      const tokenRequest = await new Api().tokenRequest(email, password)
      console.log(tokenRequest)

      if (tokenRequest.status === 200) {
        const token = tokenRequest.body.token;
        const userRequest = await new Api().userRequest(token);

        if (userRequest.status === 200) {
          const user = userRequest.body
          dispatch(logIn(token));
          dispatch(setUser(user));
          navigate('/profile');
        } else {
          setError(userRequest.message)
        }
      } else {
        setError(tokenRequest.message)
      }
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
              onChange={() => handleChangeCheckbox()}
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
