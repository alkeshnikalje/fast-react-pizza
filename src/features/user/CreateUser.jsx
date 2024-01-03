import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const userName = useSelector((store) => store.user.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    setUsername("");
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      {userName === "" && (
        <>
          <p className="mb-4 text-sm text-stone-600 md:text-base">
            👋 Welcome! Please start by telling us your name:
          </p>
          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input mb-8 w-72"
          />
        </>
      )}

      {username !== "" && (
        <div>
          <Button to="/menu" type="primary">
            START ORDERING
          </Button>
        </div>
      )}

      {userName && (
        <Button to="/menu" type="primary">
          CONTINUE ORDERING, {userName}
        </Button>
      )}
    </form>
  );
}

export default CreateUser;
