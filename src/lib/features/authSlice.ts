import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { authApi } from "../services/authApi"

interface AuthState {
  token: string | null
  user: { id: string; name: string; email: string } | null
}

function loadToken(): string | null {
  if (typeof window === "undefined") return null
  return localStorage.getItem("token")
}

function decodeUser(token: string): AuthState["user"] {
  try {
    const base64 = token.split(".")[1]
    const decoded = JSON.parse(atob(base64))
    return { id: decoded.sub, name: decoded.name, email: decoded.email }
  } catch {
    return null
  }
}

const persistedToken = loadToken()

const initialState: AuthState = {
  token: persistedToken,
  user: persistedToken ? decodeUser(persistedToken) : null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(
      state,
      action: PayloadAction<{ token: string; user: AuthState["user"] }>
    ) {
      state.token = action.payload.token
      state.user = action.payload.user
      localStorage.setItem("token", action.payload.token)
    },
    logout(state) {
      state.token = null
      state.user = null
      localStorage.removeItem("token")
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.access_token
        state.user = decodeUser(payload.access_token)
        localStorage.setItem("token", payload.access_token)
      }
    )
    builder.addMatcher(
      authApi.endpoints.getMe.matchFulfilled,
      (state, { payload }) => {
        state.user = payload
      }
    )
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer
