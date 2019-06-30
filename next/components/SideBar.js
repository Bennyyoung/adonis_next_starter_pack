import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
 
import React, {Component} from 'react';
 
import Sidebar from 'react-bootstrap-sidebar';
 
export default class SideBar extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
          isVisible: false,
        };
    }
 
    updateModal(isVisible) {
    	this.state.isVisible = isVisible;
      this.forceUpdate();
    }
 
    render() {
        return (
              <div>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossorigin="anonymous"
                    />
                  <Button bsStyle="primary" onClick={ () => this.updateModal(true) }><Glyphicon glyph="menu-hamburger"/></Button>
                  <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
                    <Nav>
                      <NavItem href="#">Link 1</NavItem>
                      <NavItem href="#">Link 2</NavItem>
                      <NavItem href="#">Link 3</NavItem>
                      <NavItem href="#">Link 4</NavItem>
                    </Nav>
                  </Sidebar>
              </div>
        );
    }
}