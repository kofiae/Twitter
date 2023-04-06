import cors from 'cors';
import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import prisma from "../lib/prisma";
import { get } from 'https';

dotenv.config();

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Healthy");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});

console.log(process.env.SECRET_CODE);

app.use(cors({ origin: "*" }))


// Get all users
app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

// Get a user by id
app.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: { iduser: parseInt(id) },
    });
    res.json(user);
});

// Create a new user
app.post("/users", async (req, res) => {
    const { nom, phone, mail, verified, creation, language, gender, birthdate, age, profilepicture, banner, bio, tweet } = req.body;
    const newUser = await prisma.user.create({
        data: { nom, phone, mail, verified, creation, language, gender, birthdate, age, profilepicture, banner, bio, tweet },
    });
    res.status(201).json(newUser);
});

// Update a user
app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { nom, phone, mail, verified, creation, language, gender, birthdate, age, profilepicture, banner, bio, tweet } = req.body;
    const updatedUser = await prisma.user.update({
        where: { iduser: parseInt(id) },
        data: { nom, phone, mail, verified, creation, language, gender, birthdate, age, profilepicture, banner, bio, tweet },
    });
    res.json(updatedUser);
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    const deletedAllTweet = await prisma.tweet.deleteMany({
        where: { iduser: parseInt(id) },
    });
    const deletedUser = await prisma.user.delete({
        where: { iduser: parseInt(id) },
    });
    res.json(deletedUser);
});

// Get all tweets
app.get("/tweets", async (req, res) => {
    const tweets = await prisma.tweet.findMany();
    res.json(tweets);
});

// Get all tweets by iduser
app.get("/tweets/:id", async (req, res) => {
    const { id } = req.params;
    const tweets = await prisma.tweet.findMany({
        where: { iduser: parseInt(id) },
    });
    res.json(tweets);
});

// Create a new tweet
app.post("/tweets/:id", async (req, res) => {
    const { id } = req.params;
    const { iduser, message, date, user } = req.body;
    const newUser = await prisma.tweet.create({
        data: {
                iduser, message, date, user: {
                    connect: {
                        iduser: parseInt(id)
                    },
                }
        },
    });
    res.status(201).json(newUser);
});

// Delete a tweet
app.delete("/tweets/:id", async (req, res) => {
    const { id } = req.params;
    const deletedTweet = await prisma.tweet.delete({
        where: { idtweet: parseInt(id) },
    });
    res.json(deletedTweet);
});