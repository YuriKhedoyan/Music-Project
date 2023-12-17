import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { getAllUsers, createUser, addFavoriteMusic } from './models/userModel.js';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/music', {});

app.get('/api/getAllUsers', (req, res) => {
  getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/api/createUser', (req, res) => {
  const userData = req.body;

  createUser(userData)
    .then((doc) => {
      console.log(doc);
      res.json({ message: 'User created successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.post('/api/addFavoriteMusic/:userId', (req, res) => {
  const { userId } = req.params;
  const { music } = req.body;

  addFavoriteMusic(userId, music)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
