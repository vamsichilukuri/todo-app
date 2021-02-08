const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// view engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/", require("./routes/routes"));

// db connection
// Connect MongoDB at default port 27017.
mongoose.connect(
	"mongodb://mongo:27017/myTodo",
	{
		useNewUrlParser: true,
		useCreateIndex: true,
	},
	(err) => {
		if (!err) {
			console.log("MongoDB Connection Succeeded.");
		} else {
			console.log("Error in DB connection: " + err);
		}
	}
);

const port = 3001;

app.listen(port, () => {
	console.log(`App is listening at http:localhost:${port}`);
});
