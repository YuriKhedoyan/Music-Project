import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const Author = mongoose.model("authors-lists", authorSchema);

export const getAuthorsList = () => Author.find({}).exec();

export { Author };
