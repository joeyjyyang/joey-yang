import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../state/App.Slice";

export default configureStore({
  reducer: {
    app: appReducer,
  },
});
