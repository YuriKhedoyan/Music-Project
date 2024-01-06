import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
  id: { 
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Music = mongoose.model("music-list", musicSchema);

export const getMusicList = () => Music.find({}).exec();

export { Music };
