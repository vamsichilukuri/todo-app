const router = require("express").Router();
const Todo = require("../models/Todo.model");

router.get("/", async (req, res) => {
	const todo = await Todo.find();
	res.render("index", { data: todo });
});

router.post("/todos", async (req, res) => {
	const { todo } = req.body;
	await Todo.create({ todo });
	res.redirect("/");
});

router.get("/todos/remove/:_id", async (req, res) => {
	const { _id } = req.params;
	await Todo.remove({ _id });
	res.redirect("/");
});

module.exports = router;
