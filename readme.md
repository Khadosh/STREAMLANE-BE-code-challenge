# 🧠 Backend Engineer Task

Thank you for taking the time to complete this exercise! The goal is to evaluate your backend skills in Node.js, including API integration, code structure, and error handling.

---

## 🚀 Instructions

1. **Fork this repository**
2. **Create a new branch** with your name or initials  
   _Example_: `feature/john-doe`
3. Make your changes directly in that branch
4. When you're done, **open a Pull Request** against the `main` branch

---

## 🛠️ The Task

Using **Node.js** and **Express**, build a simple API endpoint that does the following:

### ✅ Core Requirements

- Fetch user data from the API:  
  `https://jsonplaceholder.typicode.com/users`

- For each user, fetch their posts:  
  `https://jsonplaceholder.typicode.com/posts?userId=<id>`

- Generate and expose a summary report via a GET route at `/report`  
  The response should follow this structure:

    ```json
    [
      {
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "postCount": 10
      },
      ...
    ]
    ```

- Organize your code into reusable functions:
  - `getUsers()`
  - `getPosts(userId)`
  - `generateReport()`

- Add proper error handling (e.g., failed requests, users with no posts)

---

## 🌟 Bonus Points

- Add optional sorting via query parameters:
  - `/report?sortBy=name`
  - `/report?sortBy=postCount`

- Break logic into modules/files when appropriate

- Clean, readable code — think production-quality

---

## 🕒 Estimated Time

~30–45 minutes. We're looking for clarity, correctness, and maintainability.

---

Looking forward to reviewing your work!
