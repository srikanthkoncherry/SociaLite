import { useContext, useRef, useState } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import Password from "../../components/password/Password";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const [show, setShow] = useState(false)
  const handleClick = (e) => {
    e.preventDefault();
    console.log(e)
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  const redirectToRegister = () => {
    window.location = "/register"
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SociaLite</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SociaLite.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />

            <Password value={password} />

            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
          </form>
          <button className="loginRegisterButton" onClick={redirectToRegister}>
            {isFetching ? (
              <CircularProgress color="white" size="20px" />
            ) : (
              "Create a New Account"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
