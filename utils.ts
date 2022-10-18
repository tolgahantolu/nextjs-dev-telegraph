import store from "./store";
import { setUser } from "./store/authSlice";

export const handlerSetUser = (data: any) => {
  store.dispatch(setUser(data));
};
