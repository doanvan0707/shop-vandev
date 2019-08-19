// The top-level React component
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../pages/Home';
import Introduce from '../pages/Introduce';
import Contact from '../pages/Contact';
import Product from '../pages/Product/ListProduct';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render() {
        return (
            <Router>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Vandev</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/">Home</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/introduce">Introduce</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/product">Product</Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/contact">Contact</Link>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>

                    <Route path="/" exact component={Home} />
                    <Route path="/introduce" component={Introduce} />
                    <Route path="/product"  component={Product} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        )
    }
}

export default App;