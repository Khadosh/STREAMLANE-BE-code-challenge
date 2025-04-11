import express from "express";

const app = express();
const port = 8080;

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

import { router as reportsRouter } from "./reports.controller.js";

app.get("/", (_, res) => res.send("Welcome"));

app.get("/users", async (req, res) => {
  const users = await fetch(USERS_URL).then(res => res.json());
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await fetch(`${USERS_URL}/${req.params.id}`).then(res => res.json());
  res.send(user);
});

app.use("/reports", reportsRouter);

app.listen(port, () => {
  console.log(`Sandbox listening  http://localhost:${port}`);
});
