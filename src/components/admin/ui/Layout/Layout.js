import "./layout.css";
import NavBar from "../navbar/NavBar";
import SideBar from "../sideBar/SideBar";
const Layout = ({ children }) => {
  return (
    <>
      <div
        className="container-fluid"
        style={{ padding: 0, overflowX: "hidden" }}
      >
        <div className="row">
          <div className="col-md-2" style={{ padding: 0 }}>
            <SideBar />
          </div>
          <div className="col-md-10" style={{ padding: 0 }}>
            <NavBar />
            <div
              className="content
            "
            >
              <main>{children}</main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
