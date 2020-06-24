import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="options">
      <Link className="option" to="/">
        Inicio
      </Link>
      <Link className="option" onClick={() => auth.signOut()}>
        Cerrar Sesión
      </Link>
    </div>
  </div>
);

export default Header;
