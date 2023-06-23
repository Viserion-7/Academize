import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import GetUsername from "../services/GetUsername";

const Login = () => {
  if(localStorage.getItem('access_token')){
    window.location.href= '/home'
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };
    try {
      const { data } = await axios.post(
        "http://localhost:8000/token/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        { withCredentials: true }
      );

      console.log(data);
      localStorage.clear();
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data["access"]}`;
      GetUsername({ username });
      window.location.href = "/home";
    } catch (error) {
      setErrorMessage("Incorrect username or password");
    }
  };
  return (
    <div className="login">
      <div className="Auth-form-container">
        <div style={{fontSize: "50px", fontWeight: "900", fontFamily: ""}}>
          Welcome to AcademiZe
        </div>
        <div className="Auth-box">
          <form className="Auth-form" onSubmit={submit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label style={{ padding: "10px" }}>Username</label>
                <input
                  style={{ borderRadius: "100px", padding: "15px", height: "50px", width: "100%", border: "1px solid black", outline: "none", fontSize: "15px"}}
                  className="form-control mt-1"
                  placeholder="Enter Username"
                  name="username"
                  type="text"
                  value={username}
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group mt-3">
                <label style={{ padding: "10px" }}>Password</label>
                <input
                  style={{ borderRadius: "100px", padding: "15px", height: "50px", width: "100%", border: "1px solid black", outline: "none", fontSize: "15px"}}
                  name="password"
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {errorMessage && (
                <p style={{ color: "red", fontSize: "15px" }}>{errorMessage}</p>
              )}{" "}
              {/* Render error message if it exists */}
              <div className="d-grid gap-2 mt-3">
                <br />
                <button
                className="Auth-button"
                  type="submit"
                >
                  Login
                </button>
              </div>
              <Link
                to="/register"
                style={{
                  color: "black",
                  fontSize: "15px",
                  textDecoration: "underline",
                  marginTop: "10px",
                }}
              >
                Don't Have An Account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
