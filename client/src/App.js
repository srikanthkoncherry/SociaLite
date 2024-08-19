import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Prompt from "./components/prompt/Prompt";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [s, setS] = useState(true)

  return (
    <button onClick={setS(false)}>
      false
    </button>
  );
}

export default App;
