import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import { fetchUser, registerUser } from '@/services/userService'

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  const exists = await fetchUser(email)
  if (exists) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 })
  }

  const user = await registerUser({ email, password: await hash(password, 10) })

  return NextResponse.json(user)
}