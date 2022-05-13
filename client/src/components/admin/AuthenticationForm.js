import axios from "axios";

const AuthenticationForm = () => {

    const handleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleLogin}>
            <input 
                type="text" 
                id="identifiant"
                autoComplete="off"
                placeholder="identifiant" 
                required
            />
            <input 
                type="password" 
                id="password"
                placeholder="mot de passe" 
                required
            />
            <input 
                type="submit" 
                value="se connecter"
            />
        </form>
    );
};

export default AuthenticationForm;