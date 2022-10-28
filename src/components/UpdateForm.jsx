import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, selectUserJWT } from "../utils/redux/selectors";
import { updateUser } from "../utils/redux/reducers";
import Api from "../utils/api/Api";

/**
 * UpdateForm
 * @returns {JSX.Element} UpdateForm component
 */

function UpdateForm() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectUserJWT);
  const [formIsLocked, setFormIsLocked] = useState(true);
  const [firstName, setFirstNameInput] = useState("");
  const [lastName, setLastNameInput] = useState("");

  const request = async () => {
    const req = await new Api().updateRequest(firstName, lastName, token);

    if (req.status === 200) {
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      dispatch(updateUser({ firstName, lastName }));
      setFormIsLocked(true);
    }
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
