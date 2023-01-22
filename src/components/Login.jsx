import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import img from "../../src/assets/forex.jpg";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);


  let navigate = useNavigate();
  let validate = true;

  function submit(e) {
    e.preventDefault();

    if (name === "" || email === "") {
      setNameMessage("Please Enter Your First Name");
      setEmailMessage("Please Enter Your EMail address");
      validate = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailMessage("Please Enter valid Email");
      validate = false;
    } else {
      validate = true;
      navigate("/home");
      let data = { name: name, email: email }
      axios.put("http://localhost:8081/user/submit", data).then((res) => {
        console.log(res.data.data)
      });
    }
  }


  useEffect(() => {



  }, [])

  return (
    <section className="vh-100" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src={img}
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                          style={{ color: "#ff6219" }}
                        ></i>
                        <span className="h3 fw-bold mb-0 text-center mb-4 text-warning">
                          CURRENCY EXCHANGE RATE
                        </span>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example17"
                          autoComplete="false"
                          className="form-control form-control-lg"
                          placeholder="First Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                        <div className="text-danger">{nameMessage}</div>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example27"
                          autoComplete="false"
                          className="form-control form-control-lg"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="text-danger">{emailMessage}</div>
                      </div>

                      <div className="pt-1 mb-4">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="button"
                          onClick={submit}
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
