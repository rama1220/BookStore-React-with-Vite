import { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../loginContext";

const SideMenu = () => {
  const { setNamaLogin } = useContext(LoginContext);
  const doLogout = () => {
    setNamaLogin(null);
    localStorage.removeItem("loginUser");
  };

  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <div className="user-panel">
          <div className="pull-left image">
            <img src="https://i.pinimg.com/474x/b3/96/03/b39603a63b2458816c47ca7ec2f49838.jpg" alt="User Avatar" className="img-circle" />
          </div>
          <div className="pull-left info">
            <p>Jon</p>
          </div>
        </div>

        <ul className="sidebar-menu" data-widget="tree">
          <li className="header">BookStore</li>

          <li>
            <Link to="/home">
              <i className="fas fa-eye fa-sm"></i> <span>Home</span>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <i className="fas fa-dashboard"></i> <span>About</span>
            </Link>
          </li>

          <li>
            <Link to="datadiri/">
              <i className="fas fa-dashboard"></i> <span>Data diri</span>
            </Link>
          </li>

          <li>
            <Link to="/book-list">
              <i className="fas fa-user"></i> <span>List Buku</span>
            </Link>
          </li>

          <li>
            <Link to="/" onClick={doLogout}>
              <i className="fas fa-gear"></i> <span>Logout</span>
            </Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default SideMenu;
