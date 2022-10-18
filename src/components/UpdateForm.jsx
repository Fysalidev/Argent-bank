import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../utils/redux/selectors";

function UpdateForm() {
  const user = useSelector(selectUser);
  const [formIsLocked, setFormIsLocked] = useState(true);
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("")

  const updateRequest = () => {
  
  }

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
            <input type="text" placeholder={user.firstName} />
            <input type="text" placeholder={user.lastName} />
          </div>
          <div>
            <button className="edit-button">Save</button>
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
