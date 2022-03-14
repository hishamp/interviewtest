import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div style={{ hieght: 50, display: "flex", justifyContent: "center" }}>
        <Link to={"/counter"}>Counter</Link>
        <Link to={"/todo"} style={{ marginLeft: 10, marginRight: 10 }}>
          Todo
        </Link>
        <Link to={"/form"}>Form</Link>
      </div>
      <div
        style={{ paddingTop: 30, display: "flex", justifyContent: "center" }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
