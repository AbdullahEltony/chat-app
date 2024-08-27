import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig, rootReducer } from "./rootReducer";

// استخدام persistReducer لتغليف rootReducer
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer, // استخدام persistedReducer هنا
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // تعطيل التحقق من القابلية للتسلسل
      immutableCheck: false,    // تعطيل التحقق من عدم التغيير
    }),
});

const persistor = persistStore(store);
const { dispatch } = store;

export { store, persistor, useDispatch, useSelector, dispatch };
