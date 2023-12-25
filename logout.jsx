import { Link } from "react-router-dom";
import LoginContext from "./loginContext";
import { useContext, useEffect } from "react";
const Logout = () => {
  const {setNamaLogin } = useContext(LoginContext);
  useEffect(() => {
    setNamaLogin(null);
    localStorage.removeItem("loginUser");
  },);

  return <Link to="/logout" />;
};

export default Logout;
