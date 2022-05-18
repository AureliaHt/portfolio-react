import { useState, useRef, useEffect } from "react";

const AuthenticationForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  const userRef = useRef();
  const errorMessageRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user, password);
    setSuccess(true);
    setUser('');
    setPassword('');
  };

  return (
    <>
    { success ? (
      <section>
      <a href="https://www.robinwieruch.de/react-router-redirect/">Tu es connecté, redirection</a>
      </section>
    ) : (
    <section>
      <div className="formHeading"><h2>Accès Admin</h2></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="identifiant"></label>
        <input
          type="text"
          id="identifiant"
          ref={userRef}
          autoComplete="off"
          placeholder="identifiant"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="mot de passe"
          value={password}
          required
        />
        <button> Connexion </button>
      </form>
      <p
        ref={errorMessageRef}
        className={errorMessage ? "errorMessage" : "offscreen"}
        aria-live="assertive"
      >
        {errorMessage}
      </p>
    </section>
    )}
    </>
  );
};

export default AuthenticationForm;
