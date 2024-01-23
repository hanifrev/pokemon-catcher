import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import ballReducer from "./ballSlice";
import buttonReducer from "./buttonSlice";
import { api, pokemonApiSlice } from "@/services/api";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    ball: ballReducer,
    button: buttonReducer,
    [api.reducerPath]: api.reducer,
    [pokemonApiSlice.reducerPath]: pokemonApiSlice.reducer,
  },
  // @ts-ignore
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, pokemonApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
