const mongoose = require ('mongoose');

const projectSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date},
    image: {type: String, required: true},
    technologies: {type: String, required: true},
    description: {type: String, required: true}
});

const ProjectModel = mongoose.model('project', projectSchema);

module.exports = ProjectModel;