import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { appRoutes } from "../contracts/routes";
import { StarFill, Book, Search, HouseDoorFill } from "react-bootstrap-icons";

const iconSize = {
  fontSize: 1.2 + "REM",
};

const NavMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        light
      >
        <Container>
          <NavbarBrand tag={Link} to="/">
            GitHubRepos
          </NavbarBrand>
          <NavbarToggler
            onClick={() => setCollapsed(!collapsed)}
            className="mr-2"
          />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!collapsed}
            navbar
          >
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to={appRoutes.home}>
                  <HouseDoorFill className="pb-1 pr-1" style={iconSize} />
                  <span>Home</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="text-dark"
                  to={appRoutes.searchRepos.index}
                >
                  <Search className="pb-1 pr-1" style={iconSize} />
                  <span>Pesquisar</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="text-dark"
                  to={appRoutes.myRepos.index}
                >
                  <Book className="pb-1 pr-1" color="brown" style={iconSize} />
                  <span>Meus repositórios</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  className="text-dark"
                  to={appRoutes.favRepos}
                >
                  <StarFill
                    className="pb-1 pr-1"
                    color="#FFEB3B"
                    style={iconSize}
                  />
                  <span>Fav Repos</span>
                </NavLink>
              </NavItem>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavMenu;
