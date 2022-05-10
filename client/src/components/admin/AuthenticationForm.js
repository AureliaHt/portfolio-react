const AuthenticationForm = () => {
    return (
        <div>
            <input type="text" placeholder="identifiant" required/>
            <input type="password" placeholder="mot de passe" required/>
            <input type="submit" placeholder="se connecter"/>
        </div>
    );
};

export default AuthenticationForm;