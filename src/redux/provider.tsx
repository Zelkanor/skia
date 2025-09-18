"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";

import { makeStore, RootState } from "./store";

type Props = {
  children: React.ReactNode;
  preloadedState?: Partial<RootState>;
};

const ReduxProvider = ({ children, preloadedState }: Props) => {
  const storeRef = useRef(makeStore(preloadedState));
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default ReduxProvider;
