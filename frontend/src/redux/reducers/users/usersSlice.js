import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(name, password, email, userId) {
        return {
          payload: {
            id: nanoid(),
            name,
            password,
            email,
            userId,
          }
        }
      }
    },
  }
})

export const selectAllUsers = (state) => state.user;

export const { userAdded } = usersSlice.actions

export default usersSlice.reducer