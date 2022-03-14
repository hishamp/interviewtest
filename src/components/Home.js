import { Link } from "react-router-dom";

const Home = () => {
  console.log("hi");
  return (
    <div>
      <ul>
        <li>
          <Link to={"/counter"}>Counter</Link>
        </li>
        <li>
          <Link to={"/todo"}>Todo</Link>
        </li>
        <li>
          <Link to={"/form"}>Form</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
