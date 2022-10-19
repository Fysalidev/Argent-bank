import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser, selectUserJWT } from "../utils/redux/selectors";
import Api from "../utils/api/Api";

function UpdateForm() {
  const user = useSelector(selectUser);
  const token = useSelector(selectUserJWT);
  const [formIsLocked, setFormIsLocked] = useState(true);
  const [firstName, setFirstNameInput] = useState("");
  const [lastName, setLastNameInput] = useState("");

  console.log(firstName);
  console.log(lastName);

  const request = async () => {
    console.log(firstName);
    console.log(lastName);
    
    await new Api().updateRequest(
      firstName,
      lastName,
      token
    );
  };

  return (
    <div className="header">
      <h1>Welcome back</h1>
      {formIsLocked ? (
        <div>
          <h2>
            {user.firstName} {user.lastName}
          </h2>
          <button
            className="edit-button"
            onClick={() => setFormIsLocked(!formIsLocked)}
          >
            Edit Name
          </button>
        </div>
      ) : (
        <div>
          <div>
            <input
              type="text"
              placeholder={user.firstName}
              onChange={(e) => setFirstNameInput(e.target.value)}
            />
            <input
              type="text"
              placeholder={user.lastName}
              onChange={(e) => setLastNameInput(e.target.value)}
            />
          </div>
          <div>
            <button className="edit-button" onClick={() => request()}>
              Save
            </button>
            <button
              className="edit-button"
              onClick={() => setFormIsLocked(!formIsLocked)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateForm;
