// store/App.js
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import AppNavigator from "./store/navigation/AppNavigator";
import { store } from "./store/store";
import { loadCartFromStorage } from "./store/features/cart/cartSlice";
import { checkUserSession } from "./store/features/auth/authSlice";
import "./store/services/firebase";

const InitApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(loadCartFromStorage());
  }, [dispatch]);

  return <AppNavigator />;
};

export default function App() {
  return (
    <Provider store={store}>
      <InitApp />
    </Provider>
  );
}
