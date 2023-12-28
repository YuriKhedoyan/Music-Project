import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { getAllUsers, createUser } from './src/models/userModel.js';
import { getMusicList } from './src/models/musicListModel.js'

import { User } from './src/models/userModel.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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

app.get('/api/musicList', (req, res) => {
  getMusicList()
    .then((musicList) => {
      res.json(musicList);
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

app.post('/api/addFavoriteMusic/:musicId', async (req, res) => {
  try {
    const { musicId } = req.params;
    const { userId } = req.body;
    // Ensure userId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId.userId)) {
      return res.status(400).json({ success: false, message: 'Invalid user ID' });
    }

    const user = await User.findOneAndUpdate({ id: userId.userId }, { $push: { favoriteMusic: musicId } });

    if (user) {
      console.log('Update:', user);
      res.json({ success: true, message: 'Music added to favorites successfully', user });
    } else {
      res.status(404).json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
