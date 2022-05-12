// GESTION DES ERREURS DE CREATION DE PROFIL
module.exports.signUpErrors = (err) => {
    let errors = { identifiant: '', password: ''}

    if (err.message.includes('identifiant'))
        errors.identifiant = "Identifiant incorrect";

    if (err.message.includes('password'))
        errors.password = "mot de passe doit faire 8 caractères minimum";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('identifiant'))
        errors.identifiant = "Cet identifiant est déjà utilisé";

    return errors
};

// GESTION DES ERREURS DE LOGIN - SIGN IN
module.exports.signInErrors = (err) => {
    let errors = { identifiant: '', password: ''}

    if (err.message.includes('identifiant'))
        errors.identifiant = "Email incorrect";

    if (err.message.includes('password'))
        errors.password = "mot de passe incorrect";

    return errors
};