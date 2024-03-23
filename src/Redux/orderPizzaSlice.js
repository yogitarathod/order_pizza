import { createSlice } from "@reduxjs/toolkit";
import { getOrderId } from "../Component/TimeDiff";

const OrderPizzaSlice = createSlice({
  name: "order",
  initialState: {
    maxOrder: 10,
    orderDetails: [],
    currentOrder: 0,
  },
  reducers: {
    addOrder: (state, action) => {
      let orderDetails = {
        orderId: state.currentOrder + 1,
        orderIdView: getOrderId(state.currentOrder + 1),
        detail: action.payload.values,
        orderType: "Order Placed",
        orderTime: Date.now(),
        orderTotalTime: Date.now(),
      };
      state.orderDetails[state.currentOrder+1] = orderDetails;
      state.currentOrder += 1;
    },
    updateOrder: (state, action) => {
      state.orderDetails[action.payload.orderId] = {...state.orderDetails[action.payload.orderId],
        orderType:action.payload.currentState,
        orderTime:Date.now()
      }
    },
  },
});
export const { addOrder, updateOrder } = OrderPizzaSlice.actions;
export default OrderPizzaSlice.reducer;
