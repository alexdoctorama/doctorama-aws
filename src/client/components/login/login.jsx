import React, { useState, useEffect } from "react";
import {Link, useLocation} from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const LoginContainer = (props) => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let previous_url = "";

  if(location.state !== undefined) {
    previous_url = location.state.previous_url;
  }


  useEffect(() => {
    //Chekc if the previous_url is not null

    document.body.classList.add("account-page");
    return () => document.body.classList.remove("account-page");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make an HTTP POST request to localhost:8080/login with email and password
    fetch("https://ec2-16-171-147-152.eu-north-1.compute.amazonaws.com:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "username": email, "password": password }),
    })
        .then((response) => {
          // Handle response
          if (response.ok) {
            // If login is successful, you can redirect or perform other actions
            response.json().then((data) => {
              console.log(data["token"]);
              //Delete the token from local storage
              localStorage.removeItem("token");

              localStorage.setItem("token", data["token"]);

              let token = localStorage.getItem("token");
              let decoded = JSON.parse(atob(token.split('.')[1]));
              console.log(decoded.role);

              if(decoded.role === "doctor"){
                //Redirect to doctor/dashboard
                props.history.push("/doctor/doctor-dashboard");
              }
              else if(decoded.role === "psychologist"){
                //Redirect to doctor/dashboard
                props.history.push("/doctor/doctor-dashboard");
              }
              else if(decoded.role === "nutritionist"){
                //Redirect to doctor/dashboard
                props.history.push("/doctor/doctor-dashboard");
              }
              else if(decoded.role === "patient"){

                if(location.state === undefined){
                  //Redirect to patient/dashboard
                  props.history.push("/patient/dashboard");
                }
                else{
                  //console.log("maksmdlamsdlasmdamlsdmals");
                  //Redirect to the previous URL
                  props.history.push(location.state.previous_url);
                }

              }
              else{
                console.error(decoded.role);
              }
            });

            //Decode the token


            //Redirect to patient/dashboard
            // eslint-disable-next-line react/prop-types
            //props.history.push("/patient/dashboard");
          } else {
            // If login fails, you can handle the error
            console.error("Login failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
  };

  return (
      <>
        <Header {...props} />
        <div className="content top-space">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <h3>Login <span>Doctorama</span></h3>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="form-group form-focus">
                          <input
                              type="text"
                              className="form-control floating"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                          />
                          <label className="focus-label">Email</label>
                        </div>
                        <div className="form-group form-focus">
                          <input
                              type="password"
                              className="form-control floating"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                          />
                          <label className="focus-label">Password</label>
                        </div>
                        <div className="text-end">
                          <Link className="forgot-link" to="/pages/forgot-password">Forgot Password ?</Link>
                        </div>
                        <button className="btn btn-primary w-100 btn-lg login-btn" type="submit">Login</button>
                        <div className="text-center dont-have">
                          Don’t have an account?
                          <Link
                              to={{
                                pathname: "/register",
                                state: {
                                  previous_url: previous_url
                                }
                              }}
                        >
                            Register</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer {...props} />
      </>
  );
};

export default LoginContainer;
