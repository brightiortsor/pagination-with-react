import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./components/Home.js";
import Users from "./components/Users.js";
import Error from "./components/Error.js";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary> 
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
                <Route path="/contact" element={<Error />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </div>
          </main>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
