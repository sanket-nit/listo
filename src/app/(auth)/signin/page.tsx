"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from 'next-auth/react'
import { redirect } from "next/navigation"
import { useState } from "react"

export default function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  async function handleSignin() {
    if (!email || !password) {
      return;
    }
    const response  = await signIn('credentials', {email, password, redirect: false})

    if (response?.ok) {
      redirect('/dashboard')
    } else if (response?.error) {
      console.log('error')
    }
    
    
  }

  return (
    <div className="grid space-y-1">

      <Label htmlFor="email">Email</Label>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      <Label htmlFor="password">Password</Label>
      <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      <Button onClick={handleSignin}>Sign in</Button>
    </div>
  )
}