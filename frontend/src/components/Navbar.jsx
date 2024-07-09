import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b">
      <ul className="flex justify-between px-64 py-4">
        <li className="hover:text-gray-500 transition hover:underline">
          <Link to="/">Home</Link>
        </li>
        <div className="flex gap-4">
          <li className="hover:text-gray-500 transition hover:underline">
            <Link to="/login">Login</Link>
          </li>
          <li className="hover:text-gray-500 transition hover:underline">
            <Link to="/register">Register</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
