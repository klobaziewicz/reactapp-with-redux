import logo from './images/logo.PNG'
import Home from './components/home';
import Contact from './components/contact';
import Cart from './components/cart';
import './styles/style.scss'
import './styles/nav.scss'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
    return (
    <div className="App">
      <Router>
        <div className="nav">
          <img alt="logo" src={logo}></img>
          <ul>
            <li></li>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
            </li>
            <li>
              <Link to="/cart" style={{ textDecoration: 'none', color: '#fff' }}>Cart</Link>
            </li>
            <li>
              <Link to="/contact" style={{ textDecoration: 'none', color: '#fff' }}>Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

    </div>
  );
}
//<Produkty></Produkty>

export default App;
