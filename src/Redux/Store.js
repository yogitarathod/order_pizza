import { configureStore } from "@reduxjs/toolkit";
import OrderPizzaSlice from "./orderPizzaSlice";

const Store = configureStore({
  reducer: {
    order: OrderPizzaSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});

export default Store;
