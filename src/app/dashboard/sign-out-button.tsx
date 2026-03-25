"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/lib/store"
import { logout } from "@/lib/features/authSlice"
import { authApi } from "@/lib/services/authApi"

export function SignOutButton() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  function handleSignOut() {
    dispatch(logout())
    dispatch(authApi.util.resetApiState())
    router.push("/login")
  }

  return (
    <Button variant="outline" onClick={handleSignOut}>
      Sign Out
    </Button>
  )
}