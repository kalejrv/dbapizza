import { configureStore } from "@reduxjs/toolkit";
import { authSlice, searchSlice } from "./slices";
import { authApi, orderApi, pizzaApi, userApi } from "./services";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    search: searchSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [pizzaApi.reducerPath]: pizzaApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(pizzaApi.middleware)
      .concat(orderApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
