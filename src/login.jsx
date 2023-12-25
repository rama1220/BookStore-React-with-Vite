import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { useState, useContext } from "react";
import LoginContext from "../loginContext";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory

const Login = () => {
  const { setNamaLogin } = useContext(LoginContext);
  const [berhasilLogin, setBerhasilLogin] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const LogAction = (e) => {
    e.preventDefault();

    const formLogin = document.getElementById("formLogin");
    const formdata = new FormData(formLogin);

    if (formdata.get("username") === "rama" && formdata.get("password") === "hallo") {
      const username = formdata.get("username");
      setNamaLogin(username);
      localStorage.setItem("loginUser", username);
      setBerhasilLogin(true);
      navigate("/home"); // Use navigate instead of history.push
    } else {
      alert("Username or password is incorrect");
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          <MDBCol md="3">
            <MDBCardImage src="https://www.mnctrijaya.com/uploads/news/IMG-20210427-WA0004.jpg" alt="login form" className="rounded-start w-100" />
          </MDBCol>

          <MDBCol md="8">
            <MDBCardBody className="d-flex flex-column">
              <div className="d-flex flex-row mt-2">
                <span className="h1 fw-bold mb-0">Welcome</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
                Sign into your account
              </h5>
              <form onSubmit={LogAction} id="formLogin">
                <MDBInput wrapperClass="mb-4" label="Username" id="username" type="text" size="lg" name="username" />
                <MDBInput wrapperClass="mb-4" label="Password" id="password" type="password" size="lg" name="password" />

                <MDBBtn className="mb-4 px-5" color="dark" size="lg" type="submit">
                  Login
                </MDBBtn>
              </form>
              {berhasilLogin && <Link to="/home" />}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
