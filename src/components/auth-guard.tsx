"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useAppSelector } from "@/lib/store"

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const token = useAppSelector((state) => state.auth.token)
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !token) {
      router.push("/login")
    }
  }, [mounted, token, router])

  if (!mounted || !token) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Redirecting...</p>
      </div>
    )
  }

  return <>{children}</>
}
