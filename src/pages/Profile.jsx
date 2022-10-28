import { ACCOUNTS } from "../data/mockup";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUser, selectUserLogin } from "../utils/redux/selectors";
import UpdateForm from "../components/UpdateForm";
import AccountCard from "../components/AccountCard";

/**
 * Profile page
 * @returns {JSX.Element} Profile component
 */

function Profile() {
  const isUserLogIn = useSelector(selectUserLogin);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLogIn || !user) {
      navigate("/");
    }
  }, [isUserLogIn, user, navigate]);

  return isUserLogIn && user ? (
    <main className="main bg-dark">
      <UpdateForm user={user} />
      <h2 className="sr-only">Accounts</h2>
      {ACCOUNTS.map((account, index) => (
        <AccountCard
          key={`account${index}`}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  ) : null;
}

export default Profile;
