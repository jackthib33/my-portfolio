import logo from "./jtlogo.png";
import "./App.css";
import About2 from "./components/about";
import Photography2 from "./components/photography";
import Design2 from "./components/design";
import Painting2 from "./components/painting";
import PrintMaking2 from "./components/printmaking";
import React from "react";
import Home from "./components/Home";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown'

function App() {
  return (
    <Router>
       <div className="customFont brand" collapseOnSelect expand={false} style={{backgroundColor:'none'}}   >
          
       <img src={logo} height="60rem" className="bimg" /><p className="btext">Jack Thibodeau</p>
      
        
      </div>
     
        <Navbar className="customFont navBarS" collapseOnSelect expand={false} fixed="top" style={{marginTop:'1rem'}}   >
          
            <Navbar.Brand style={{fontSize: '5vh' }}></Navbar.Brand>
            <Navbar.Toggle  aria-controls="responsive-navbar-nav shadow-none" />
            <Navbar.Collapse  id="responsive-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto" style={{justifyContent: 'end'}} >
              <Nav.Link >
                  <LinkContainer to="/home">
                    <NavItem style={{maxWidth: '200px'}}
                  className="NavLink" eventKey={1}>Home</NavItem>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                  <LinkContainer to="/photography">
                    <NavItem className="NavLink" eventKey={1}>Photography</NavItem>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                  <LinkContainer to="/Design">
                    <NavItem className="NavLink" eventKey={1}>Digitial</NavItem>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                  <LinkContainer to="/painting">
                    <NavItem className="NavLink" eventKey={1}>Painting</NavItem>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                  <LinkContainer to="/printmaking">
                    <NavItem className="NavLink" eventKey={1}>PrintMaking</NavItem>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                  <LinkContainer to="/about">
                    <NavItem className="NavLink" eventKey={1}>About</NavItem>
                  </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                  <LinkContainer to="/about">
                    <NavItem className="NavLink" eventKey={1}>Store</NavItem>
                  </LinkContainer>
                </Nav.Link>
              </Nav>
             
            </Navbar.Collapse>
          
        </Navbar>
       
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About2 />
          </Route>
          <Route path="/photography">
            <Photography2 />
          </Route>
          <Route path="/design">
            <Design2 />
          </Route>
          <Route path="/painting">
            <Painting2 />
          </Route>
          <Route path="/printmaking">
            <PrintMaking2 />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Hom />
          </Route>
        </Switch>
      
    </Router>
  );
}

function Hom() {
  return <Home />;
}

function About() {
  return <h2>About</h2>;
}
function Photography() {
  return <h2>Photography</h2>;
}
function Design() {
  return <h2>Design</h2>;
}
function Painting() {
  return <h2>Painting</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
