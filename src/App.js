import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Users from "./components/Users.js";
import Error from "./components/Error";
// import ErrorBoundary from "./components/errorBoundary";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="container">
          <ul className="menu">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/users" className="nav-link">
                Users
              </Link>
            </li>
          </ul>
        </nav>
        <main>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/users" element={<Users />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </main>
      </Router>
      
    </div>
  );
}

export default App;
