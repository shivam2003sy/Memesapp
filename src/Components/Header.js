import React from "react";
import gif from '../Components/creepyimage.gif'
import {Navbar ,Container} from "react-bootstrap"
function Header() {
    return (
        <div className='header'>



<Navbar style={{background:'black'}}  variant="dark">
    <Container>
      <Navbar.Brand href="">
        <img
          alt=" loading ..."
          src={gif}
          width="50"
          height="50"
          className="d-inline-block align-top"
        />{'    '}
      {"   "}Meme Generator
      </Navbar.Brand>
      <Navbar.Text style={{marginLeft:'auto'}}> make india laugh </Navbar.Text>
    </Container>
  </Navbar>

        </div>
    )
}

export default Header
