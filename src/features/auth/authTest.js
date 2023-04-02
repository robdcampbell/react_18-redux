import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "test name",
  jwt: true,
};

const auth = createSlice({
  name: "auth",
  initialState,
});

//test

export default auth.reducer;
