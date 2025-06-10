// import React, { useEffect } from "react";
// import { Provider, useDispatch } from "react-redux";
// import AppNavigator from "./navigation/AppNavigator";
// import { store } from "./store";
// import { loadCartFromStorage } from "./features/cart/cartSlice";
// import { checkUserSession } from "./features/auth/authSlice";

// const InitApp = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(checkUserSession());
//     dispatch(loadCartFromStorage());
//   }, [dispatch]);

//   return <AppNavigator />;
// };

// export default function AppWrapper() {
//   return (
//     <Provider store={store}>
//       <InitApp />
//     </Provider>
//   );
// }
