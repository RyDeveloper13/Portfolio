import { useState, useEffect } from "react";
import { NavBar, Container} from "react-bootstrap";

export const NavBar = () =>
{
    const [activeLink, setActiveLink] = useState('AboutMe');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => 
        {
            if (window.scrollY > 50)
            {
                setScrolled(true);
            }
            else
            {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll". onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={''} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#about-me">About me</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={''} alt="" /></a>
                    <a href="#"><img src={''} alt="" /></a>
                    <a href="#"><img src={''} alt="" /></a>
                </div>
                <button className="vvd" onClick={() => console.log('This has been clicked the contact button')}><span>Contact Me</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }