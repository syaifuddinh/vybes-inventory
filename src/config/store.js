import { configureStore } from '@reduxjs/toolkit';
import index from "../store/index";
import auth from "../store/auth";

export default configureStore({
  reducer: {
      index: index,
      auth: auth
  },
})