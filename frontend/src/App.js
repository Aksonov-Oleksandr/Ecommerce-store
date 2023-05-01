
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

function App() {
    const {state} = useContext(Store);
    const {cart} = state;
  return (
    <BrowserRouter>
    <div className="d-flex flex-column site-container">
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
