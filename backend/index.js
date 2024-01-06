import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import { User } from "./src/models/userModel.js";
import { getMusicList } from "./src/models/musicListModel.js";
import { getAuthorsList } from "./src/models/authorsListModel.js";
import { getAllUsers, createUser } from "./src/models/userModel.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost:27017/music", {});

app.get("/api/getAllUsers", (req, res) =>
  getAllUsers().then((users) => res.json(users))
);

app.get("/api/getAuthorsList", (req, res) =>
  getAuthorsList().then((users) => res.json(users))
);

app.get("/api/musicList", (req, res) =>
  getMusicList().then((musicList) => res.json(musicList))
);

app.post("/api/createUser", (req, res) => createUser(req.body));

app.post("/api/addFavoriteMusic/:musicId", async (req, res) => {
  const { musicId } = req.params;
  const { userId } = req.body;
  let user = await User.findOneAndUpdate();
  if (!user.favoriteMusic.includes(Number(musicId))) {
     user = await User.findOneAndUpdate(
      { id: userId },
      { $push: { favoriteMusic: Number(musicId) } },
      { new: true, upsert: true }
    );

    if (user) {
      res.json({
        success: true,
        message: "Music added to favorites successfully",
        user,
      });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
