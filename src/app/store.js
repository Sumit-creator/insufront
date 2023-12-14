import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import formReducer from "../features/formSlice";

const reducers = combineReducers({
  form: formReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export { store };
