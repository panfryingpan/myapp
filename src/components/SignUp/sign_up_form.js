import React, { useState } from "react";
import { withFirebase } from "../../utils/Firebase";
import "./sign_up_form.scss";

const SignUpFormBase = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (event) => {
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        setError({ error });
      });

    event.preventDefault();
  };
  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";
  return (
    <form onSubmit={onSubmit}>
      <label>
        Nazwa użytkownika:
        <input
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="Full Name"
        />
      </label>
      <label>
        Wpisz email:
        <input
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Email Address"
        />
      </label>
      <label>
        Wpisz hasło:
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={(event) => setPasswordOne(event.target.value)}
          type="password"
          placeholder="Password"
        />
      </label>
      <label>
        Powtórz hasło:
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={(event) => setPasswordTwo(event.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
      </label>
      <button
        // disabled={isInvalid}
        type="submit"
      >
        Zarejestruj !
      </button>

      {error && <p>{error.message}</p>}
    </form>
  );
};

export default withFirebase(SignUpFormBase);
