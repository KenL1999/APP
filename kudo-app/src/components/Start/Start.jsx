import * as React from "react";
import s from "./Start.module.css";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

function Start() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [alert, setAlert] = React.useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const addEmail = (e) => {
    setEmail(e.target.value);
  };
  const addPassword = (e) => {
    setPassword(e.target.value);
  };
  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const result = await login(email, password);

    setIsLoading(false);

    if (result == true) {
      navigate("/admin");
    } else {
      setAlert(true);
    }
  }

  return (
    <>
      <div className={s.start}>
        <h1 className={s.text}>Sistema de Carga de Datos</h1>
        {alert ? (
          <div className={s.alertError}>
            <span className={s.subtext}>Incorrect credentials</span>
          </div>
        ) : (
          ""
        )}
        <br />
        <form
          className={s.form}
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className={s.data}>
            <label className={s.label} htmlFor="email">
              Email
            </label>
            <input
              className={s.input}
              onChange={addEmail}
              id="email"
              type="email"
              name="email"
              placeholder=""
              value={email}
              required
            />
            <p className={s.p}>Do you have a email address ?????</p>
          </div>

          <div className={s.data}>
            <label className={s.label} htmlFor="password">
              Password
            </label>
            <input
              className={s.input}
              onChange={addPassword}
              type="password"
              id="password"
              name="password"
              value={password}
              required
              minLength={6}
            />
            <p className={s.p}>Guess the password</p>
          </div>
          <button className={s.button} type="submit" disabled={isLoading}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Start;