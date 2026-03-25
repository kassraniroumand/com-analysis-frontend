import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"
import { authApi } from "./services/authApi"
import { dataApi } from "./services/dataApi"
import authReducer from "./features/authSlice"
import dataReducer from "./features/dataSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      data: dataReducer,
      [authApi.reducerPath]: authApi.reducer,
        [dataApi.reducerPath]: dataApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware).concat(dataApi.middleware),
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
