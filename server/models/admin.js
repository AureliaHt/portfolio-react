const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

const adminSchema = new mongoose.Schema({
    identifiant: {type: String, required: true, trim: true },
    password: {type: String, required: true}
});

adminSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const AdminModel = mongoose.model('admin', adminSchema);

module.exports = AdminModel;