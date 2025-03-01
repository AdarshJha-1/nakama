import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

export default function SignInButton() {
  return (
    <Button className='ml-10' onClick={() => signIn("google")}>Sign In</Button>
  )
}
