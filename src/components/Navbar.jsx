import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blue">Blue</Link>
        </li>
        <li>
          <Link to="/red">Red</Link>
        </li>
        <li>
          <Link to="/purple">Purple</Link>
        </li>
      </ul>
    </nav>
  );
}


