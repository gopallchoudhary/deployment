import express from "express";

const app = express();
const port = process.env.PORT ?? 8000;

app.get("/", (req, res) => {
	return res.json({
		message: "Server is healthy v3.1",
		status: "Github Actions Hurrayyy!",
		what: "Docker",
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
