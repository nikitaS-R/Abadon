import store from "..";
import { ActionType } from "./type";
export const pageDispatcher = {
  setPageId: (pageId: number) => {
    const action = {
      type: ActionType.setPageId,
      pageId,
    };
    store.dispatch(action);
  },
};
