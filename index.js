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
  return Promise.all(request);

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
  return userPost;
}
app.get('/report', async (req, res)=>{
    let users = await getUsers();
    let posts = await getPosts(users);
    
    let result =getReport(users, posts);
  
    res.send(result);

})
app.listen(port, () => {
  console.log(`Sandbox listening  http://localhost:${port}`);
});
