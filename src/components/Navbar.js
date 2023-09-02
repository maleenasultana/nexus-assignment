import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-light"
        style={{ backgroundColor: "#BEBEBE" }}
      >
        <div className="container-fluid">
          <a className="text-start mx-5" href="#">
            Trained Aesop consultations are available to provide bespoke skin
            care advise.{""}
          </a>
          <p className="text-start">
            Book a video consultation
          </p>
        </div>
      </nav>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid ">
          <p className="text-start ">
            Click and Collect is now available at Hong Kong stores. Enjoy
            complimentary shipping on orders over HK$400 +
          </p>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  SkinCare
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Body&Hand
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Hair
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Fragrance
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Kits&Travel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Gift
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Read
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Stories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  FacialAppointments
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwPR26ACL66RoLBvKs69sRKyPEs-7c2rjGmQ&usqp=CAU"
                    alt="image"
                    className="glass"
                  />
                </a>
              </li>             
              <li className="nav-item">
                <a className="text-end" aria-current="page" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="text-end" aria-current="page" href="#">
                  Cabinet
                </a>
              </li>
              <li className="nav-item">
                <a className="text-end" aria-current="page" href="#">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
      