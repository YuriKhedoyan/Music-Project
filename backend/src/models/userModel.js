import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  email: String,
  password: String,
  favoriteMusic: {},
});

export const User = mongoose.model('users', UserSchema);

export const getAllUsers = () => {
  return User.find({});
};

export const createUser = (userData) => {
  const addUser = new User({
    ...userData,
    favoriteMusic: [],
  });

  return addUser.save();
};

export const addFavoriteMusic = (userId, music) => {
  return User.findByIdAndUpdate(
    userId,
    { $push: { favoriteMusic: music } },
    { new: true }
  );
};
