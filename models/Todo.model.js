const mongoose = require("mongoose");
const Todo = new mongoose.Schema({
	todo: {
		type: String,
	},
});

module.exports = mongoose.model("todo", Todo);
