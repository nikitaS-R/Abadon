import { Action, ActionType, State } from "./type";

const innitialState: State = {
  pageId: 1,
};

export default function reducer(state = innitialState, action: Action): State {
  switch (action.type) {
    case ActionType.setPageId:
      return { ...state, pageId: action.pageId };
    default:
      return state;
  }
}
