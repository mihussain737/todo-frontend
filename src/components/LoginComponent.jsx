import React, { useState } from "react";
import { loginApiCall, saveLoggedInUser, storeToken } from "./AuthService";
import { useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLoginForm(e) {
     
    e.preventDefault();
    const loginObj = { username, password };
    console.log(loginObj);
   await loginApiCall(username, password)
      .then((response) => {
        console.log(response.data);

        const token='Basic '+window.btoa(username +":"+ password);
        storeToken(token);
          saveLoggedInUser(username);
        navigate("/todos");
        window.location.reload(false);
      })
      .catch((error) => {
        console.error(error);
      });
      
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Login Form</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">
                    Username Or Email
                  </label>
                  <div className="col-md-9">
                    <input
                      className="col-md-9"
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">Password</label>
                  <div className="col-md-9">
                    <input
                      className="col-md-9"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="form-group mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleLoginForm(e)}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
