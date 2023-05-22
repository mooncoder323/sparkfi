import type { ActionType, GlobalStateInterface } from "./types";

const initialState: GlobalStateInterface = {
  provider: null,
  web3: null,
  account: "",
};

export const Reducer = (
  state: GlobalStateInterface,
  action: ActionType
): any => {
  switch (action.type) {
    case "SET_ACCOUNT":
      return {
        ...state,
        account: action.payload,
      };
    case "SET_PROVIDER":
      return {
        ...state,
        provider: action.payload,
      };
    case "SET_WEB3":
      return {
        ...state,
        web3: action.payload,
      };
    case "CLEAR_STATE":
      return initialState;
    default:
      return state;
  }
};
