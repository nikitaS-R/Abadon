import { combineReducers, createStore } from "redux";
import PageReducer from "./pages/reducer";

export const rootReducer = combineReducers({
  PageReducer,
});
const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
export default store;
