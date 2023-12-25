import { Outlet } from "react-router-dom";
import SideMenu from "./SideMenu";
import Login from "./login";
import { useEffect, useState } from "react";
import LoginContext from "../loginContext";


function App() {
  const [namaLogin, setNamaLogin] = useState(null);
  const value = { namaLogin, setNamaLogin };
  useEffect(() => {
    if (localStorage.getItem("loginUser") !== "null") {
      setNamaLogin(localStorage.getItem("loginUser"));
    }
  }, []);

  return (
    <LoginContext.Provider value={value}>
      {namaLogin ? (
        <>

          <SideMenu />
          <Outlet />
        </>
      ) : (
        <Login />
      )}
    </LoginContext.Provider>
  );
}

export default App;
