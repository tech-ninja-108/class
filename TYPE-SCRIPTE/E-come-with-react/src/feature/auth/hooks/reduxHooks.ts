// src/hooks/reduxHooks.ts
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../../../app/store"; // Apne store ka path den

// Ab pure app me normal useDispatch ki jagah iska use karna hai
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
