import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Router from "next/router";
import { useRouter } from "next/navigation";
import { Button } from "flowbite-react";

function NavbarAdmin({ menu }) {
  const router = useRouter();
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => router.push("/admin/dashboard")}>
              Dashboard
            </Nav.Link>
            <Nav.Link onClick={() => router.push("/admin/kur-bni")}>
              Kur Bni
            </Nav.Link>
            <Nav.Link>
              <Button
                className="btn btn-success btn-sm"
                size="sm"
                onClick={() => router.push("/admin/create-article")}
              >
                create article
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarAdmin;
