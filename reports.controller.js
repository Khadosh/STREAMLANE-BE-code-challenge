import express  from "express";

const router = express.Router();

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const sortByValues = ['name', 'postCount'];

router.get("/", async (req, res) => {
    const { query: { sortBy } }  = req;
    
    if (sortBy !== undefined && !sortByValues.includes(sortBy)) {
        res.status(400).send('invalid sortBy value');
    }

    try {
        const users = await fetch(USERS_URL).then(res => res.json());
        const reports = await Promise.all(users.map(async u => {
            const url = `${POSTS_URL}?userId=${u.id}`;
            const post = await fetch(url).then(res => res.json());
            const postCount = post.length;

            return {
                name: u.name,
                email: u.email,
                postCount
            }
        }));

        if (sortBy && sortBy === 'name') {
            reports.sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
        } else if (sortBy && sortBy === 'postCount') {
            reports.sort((a, b) => {
                return a.postCount - b.postCount;
            });
        } 

        res.status(200).send(reports);
    } catch (e) {
        res.status(500).send(e);
    }
});

export { router };