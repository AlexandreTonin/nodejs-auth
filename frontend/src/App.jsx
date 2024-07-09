import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-8"></div>
      <Outlet />
    </div>
  );
};

export default App;
