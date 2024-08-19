import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    alert("Invalid credentials")
  }
};

export const allUsersNames = async () => {
  try {
    const res = await axios.get("/users/all");
    return res.data
  } catch (err) {
    console.log(err)
    return []
  }
};
