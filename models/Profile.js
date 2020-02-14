const mongoose = require('../db/connections');

const ProfileSchema = new mongoose.Schema({
	image: String,
	name: String,
	age: String,
	location: String,
	about: String,
	languages: []
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
