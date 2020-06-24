import React from "react";
import { connect } from "react-redux";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./login.styles.scss";

export const LoginPage = ({currentUser}) => (
  <div className="box-layout">
    <div className="box">
      <h1 className="title">Procesos Tecton</h1>
      <CustomButton onClick={signInWithGoogle}>Login con Google</CustomButton>
    </div>
  </div>
);


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(LoginPage);
