
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import {LinkContainer} from "react-router-bootstrap"
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";
import {useContext} from "react";
import {Store} from "./Store";
import { FaShoppingCart } from 'react-icons/fa';
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart, userInfo } = state;

    const signoutHandler = () => {
        ctxDispatch({ type: 'USER_SIGNOUT' });
        localStorage.removeItem('userInfo');
    };
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
            <Navbar bg="dark" variant="dark">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                    <img src="/imgs/2.png" alt="img" className="logonav"/>  Security Pro
                    </Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">

                    <Link to="/cart" className="nav-link">
                        <FaShoppingCart size={25}/>
                        {cart.cartItems.length > 0 &&(
                            <Badge pill bg="danger">
                                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                            </Badge>
                        )}
                    </Link>
                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                            <LinkContainer to="/profile">
                                <NavDropdown.Item>User Profile</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/orderhistory">
                                <NavDropdown.Item>Order History</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Divider />
                            <Link
                                className="dropdown-item"
                                to="#signout"
                                onClick={signoutHandler}
                            >
                                Sign Out
                            </Link>
                        </NavDropdown>
                    ) : (
                        <Link className="nav-link" to="/signin">
                            Sign In
                        </Link>
                    )}
                </Nav>
            </Container>
            </Navbar>

        </header>
      <main>
          <Container className="mt-3">
              <Routes>
               <Route path="/" element={<HomeScreen/>}></Route>
               <Route path="/product/:slug" element={<ProductScreen/>}></Route>
               <Route path="/cart" element={<CartScreen/>}></Route>
               <Route path="/signin" element={<SigninScreen/>} />
              </Routes>
          </Container>

          </main>
        <footer>
            <div className="text-center">2023 All rights reserved</div>
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
