import { React, useEffect } from "react";
import { VERIFY_USER } from "../../constants/actionTypes";
import agent from "../../agent";

import { connect } from "react-redux";
import "./verifyEmail.css";
// import { Route, Switch } from 'react-router-dom';

const VerifyEmail = (props) => {
  const token = localStorage.getItem("jwt");
  const sendToken = () => {
    props.VerifyEmail(token);
  };

  useEffect(() => console.log("token", token), []);
  return (
    <div className="verify-email">
      <p className=".header__logo__content--content__para">
        The team of VLV welcomes you. Start relaxing your soul and enjoy your
        stay.
      </p>
      <button onClick={sendToken} className="verify-email--button">
        verify email
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({ ...state.auth });
const mapDispatchToProps = (dispatch) => ({
  VerifyEmail: (token) =>
    dispatch({ type: VERIFY_USER, payload: agent.user.verifyUser(token) }),
});
export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
