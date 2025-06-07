import React from "react";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
import { store } from "./store"; // importa store desde 'store/index.js'
import "./services/firebase";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
