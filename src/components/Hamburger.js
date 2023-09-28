import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";

const props = {
  name: "Enable both scrolling & backdrop",
  scroll: true,
  backdrop: true,
};

function Ham({ name, ...props }) {
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
    color: "white",
    fontSize: "1.9rem",
    marginRight: "3rem",
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
          <Link to="/todo" style={linkStyles}>
            <h5 style={itemStyles}>
              <Fa6Icons.FaNoteSticky style={iconStyles} />
              Todo Notes
            </h5>
          </Link>

          <Link to="/blogs" style={linkStyles}>
            <h5 style={itemStyles}>
              <Fa6Icons.FaPencil style={iconStyles} />
              Blogs
            </h5>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Hamburger() {
  return (
    <>
      <Ham {...props} />
    </>
  );
}

export default Hamburger;
