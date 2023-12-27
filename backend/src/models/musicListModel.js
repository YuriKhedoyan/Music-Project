import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
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

const Music = mongoose.model('music-list', musicSchema);

export const getMusicList = () => {
  return Music.find({}).exec();;
};

export { Music };
