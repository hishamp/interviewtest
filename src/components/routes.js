import { Route, Routes } from "react-router-dom";
import Counter from "./counter";
import Form from "./form";
import Todo from "./todo";
import Home from "./Home";
import Header from "./Header";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Header />}>
        <Route path="/counter" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
  );
};

export default Routers;
