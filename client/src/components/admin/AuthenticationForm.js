import { useState, useRef, useEffect, useContext } from "react";
import axios from '../api/axios';
import AuthContext from "../context/AuthProvider";

const LOGIN_URL = '/admindashboard'

const AuthenticationForm = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");

  const { setAuth } = useContext(AuthContext);

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

      try {
        const response = await axios.post(LOGIN_URL,
          JSON.stringify({identifiant: user, password}),
          {
            headers: { 'Content-Type' : 'application/json'},
            withCredentials: true
          }
        );
        console.log(JSON.stringify(response?.data));
        setUser('');
        setPassword('');
        setSuccess('');

      } catch (error) {
        if (!error?.response) {
          setErrorMessage('Pas de réponse du serveur');
        } else if (error.response?.status === 400) {
          setErrorMessage('identifiant ou mot de passe incorrect');
        } else if (error.response?.status === 401) {
          setErrorMessage('Accès non autorisé');
        } else {
          setErrorMessage('La connexion a échoué');
        }
        errorMessageRef.current.focus();
      }
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
          autoComplete="off"
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
