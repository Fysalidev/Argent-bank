import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Api from "../utils/api/Api";
import { selectUserJWT, selectUserLogin } from "../utils/redux/selectors"
import { setUser } from "../utils/redux/reducers"
import { selectUser } from "../utils/redux/selectors"

function Profile() {
  const isUserLogIn = useSelector(selectUserLogin);
  const JWT = useSelector(selectUserJWT);
  const dispatch = useDispatch()

  useEffect(() => {
    async function requestUserProfile() {
      const response = await new Api().loadUser(JWT)
      console.log(response)
      if (response.status === 200) {
        dispatch(setUser(response.body))
      }
    }
    requestUserProfile()
  }, [JWT]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile