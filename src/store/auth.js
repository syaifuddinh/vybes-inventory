import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: {},
    isLoggedIn: false,
    users: [
        {
            name: "Administrator",
            username: "admin",
            password: "Asdf1234!"
        },
        {
            name: "Didin",
            username: "didin",
            password: "12345"
        }
    ]
  },
  reducers: {
    login: (state, { payload }) => {
        const username = payload.username.trim();
        const password = payload.password.trim();
        const users = state.users;
        const existingIndex = users.findIndex(value => value.username === username && value.password === password);
        if(existingIndex > -1) {
            state.loggedIn = users[existingIndex];
            state.isLoggedIn = true;
        } else {
            state.loggedIn = {};
            state.isLoggedIn = false;
        }
    },
    registration: (state, { payload }) => {
        const name = payload.name.trim();
        const username = payload.username.trim();
        const password = payload.password.trim();
        const existingIndex = state.users.findIndex(value => value.username === username);
        if(existingIndex > -1) {
            throw new Error("Username sudah terdaftar, silahkan memasukkan username lain")
        } else {
            state.users.push({ name, username, password })
        }
        
    },
    logout: (state) => {
        state.loggedIn = {};
        state.isLoggedIn = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, registration } = authSlice.actions;

export default authSlice.reducer;