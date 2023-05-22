import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { Store as ReduxStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appSlice } from "slices/app.slice";

import type { ReactElement, ReactNode } from "react";
import { createContext, useReducer } from "react";
import { Reducer } from "store/reducer";
import type { ContextType, GlobalStateInterface } from "store/types";

export const store = configureStore({
  reducer: persistReducer(
    {
      key: "root",
      storage,
    },
    combineReducers({
      app: appSlice.reducer,
    })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredActionPaths: ["register"],
        ignoredPaths: ["register"],
      },
    }),
});

export const globalContext = createContext({} as ContextType);
export const initialState: GlobalStateInterface = {
  provider: null,
  web3: null,
  account: "",
};

export function GlobalStore({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [globalState, dispatch] = useReducer(Reducer, initialState);

  return (
    <globalContext.Provider value={{ globalState, dispatch }}>
      {children}
    </globalContext.Provider>
  );
}

export type ApplicationState = {};
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Store = ReduxStore<ApplicationState>;

export const persistor = persistStore(store);
