// import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import _ from "lodash"

const NavBar = () => {
    // const data = useStaticQuery(graphql`
    // query{
    //   allProjectsJson {
    //     edges {
    //       node {
    //         name
    //         route
    //         id
    //       }
    //     }
    //   }
    // }
    // `)
    const projects = [] // _.map(data.allProjectsJson.edges, (edge) => edge.node);
    return (<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Michael Gilbert</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Projects" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/projects">Summary</NavDropdown.Item>
          <NavDropdown.Divider />
          {_.map(projects, (project) => 
            (<NavDropdown.Item key={project.id} href={`/projects/${project.route}`}>{project.name}</NavDropdown.Item>)
          )}
        </NavDropdown>
      </Nav>
      <Nav>
      </Nav>
    </Navbar.Collapse>
  </Navbar>)
}

export default NavBar;


