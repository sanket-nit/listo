"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from 'axios'
export default function Signup() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('');


  async function handleSignup() {
    if (!email || !password || !name) {
      return;
    }

    const response = await axios.post('/api/auth/signup', {
      email,
      name,
      password
    })

    console.log(response);
  }

  return (
    <div className="grid space-y-1">
      <Label htmlFor="email">Email</Label>
      <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      <Label htmlFor="name">Username</Label>
      <Input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      <Label htmlFor="password">Password</Label>
      <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      <Button onClick={handleSignup}>Sign up</Button>
    </div>
  )
}