import express from "express";
const app = express();
const port = 8080;

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

app.get("/", (_, res) => res.send("Welcome"));

app.listen(port, () => {
  console.log(`Sandbox listening  http://localhost:${port}`);
});
