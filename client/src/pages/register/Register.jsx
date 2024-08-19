import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import Password from "../../components/password/Password";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("password", password)
    console.log("passwordagain", passwordAgain)
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const redirectToLogin = () => {
    window.location = "/login"
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialLite</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on SocialLite.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <Password value={password} />
            <Password value={passwordAgain} />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
          </form>
          <button className="loginRegisterButton" onClick={redirectToLogin}>Log into Account</button>
        </div>
      </div>
    </div>
  );
}
