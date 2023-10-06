import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";

const props = {
  scroll: true,
  backdrop: true,
};

function Hamburger() {
  const { loginWithRedirect } = useAuth0();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const offcanvasStyles = {
    backgroundColor: "#1f1e1e",
  };

  const titleStyles = {
    color: "white",
    display: "flex",
    justifyContent: "center",
  };

  const iconStyles = {
    marginRight: "0.9rem",
  };

  const linkStyles = {
    textDecoration: "none",
    color: " #ef6109",
  };

  const menuIconStyles = {
    opacity: ".9",
    color: "white",
    fontSize: "2.2rem",
    marginRight: "2rem",
    marginBottom: "5px",
    cursor: "pointer",
  };

  const itemStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    width: "180px",
    margin: "1rem",
    marginBottom: "3rem",
    marginLeft: "3rem",
    cursor: "pointer",
  };

  return (
    <>
      <FaIcons.FaBars onClick={toggleShow} style={menuIconStyles} />

      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        style={offcanvasStyles}
      >
        <Offcanvas.Header closeButton className="bg-dark">
          <Offcanvas.Title>
            <h5 style={titleStyles}> APPS MENU</h5>
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <div style={linkStyles} onClick={() => loginWithRedirect()}>
            <h5 style={itemStyles}>
              <Fa6Icons.FaNoteSticky style={iconStyles} />
              <a>Todo Notes</a>
            </h5>
          </div>

          <Link to="/voice" style={linkStyles}>
            <h5 style={itemStyles}>
              <Fa6Icons.FaPencil style={iconStyles} />
              AI News Reader
            </h5>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Hamburger;
