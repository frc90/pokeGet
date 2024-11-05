import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { reducer } from "./reducer";
import { IGlobalState } from "../interfaces/IStoreInterface";

export const store = configureStore({
  reducer,
});

export const useGlobalSelector: TypedUseSelectorHook<IGlobalState> =
  useSelector;
export type GlobalDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
