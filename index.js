import express from "express";

const app = express();
const port = 8080;

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

app.get("/", (_, res) => res.send("Welcome"));

app.get("/users", async (req, res) => {
  const users = await fetch(USERS_URL).then(res => res.json());
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await fetch(`${USERS_URL}/${req.params.id}`).then(res => res.json());
  res.send(user);
});
async function getUsers(){
  return  fetch(USERS_URL).then(res => res.json());

}
async function getPosts(users){
  let request =[];
  for(let i=0; i<users.length; i++){

    
    request.push(fetch(`${POSTS_URL}?userId=${users[i].id}`));
  }
  const posts=  await Promise.all(request)
  return posts;

}
 function getReport(users, posts){
  let userPost =[];

  for(let j=0; j<posts.length;j++){
    userPost.push({
      name:users[j].name,
      email: users[j].email,
      postCount:posts.length
    })
  }
}
app.get('/report', async (req, res)=>{
    let users = await getUsers();
    console.log("🚀 ~ app.get ~ users:", users)
    let posts = await getPosts(users);
    console.log("🚀 ~ app.get ~ posts:", posts)
    
  let result =getReport(users, posts);
  console.log("🚀 ~ app.get ~ result:", result)
  
  res.send();

})
app.listen(port, () => {
  console.log(`Sandbox listening  http://localhost:${port}`);
});
