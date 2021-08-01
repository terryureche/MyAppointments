import express from "express";
import { getUsers } from './api/users';
import bodyParser from "body-parser";

const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
app.get("/", (req: any, res: any) => {
    res.send("Hello world!");
});

app.get("/users", getUsers);

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});

app.use(bodyParser.json());