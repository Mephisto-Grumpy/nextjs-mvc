import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({ message: 'Signed out successfully' })
  response.cookies.set('userId', '', { httpOnly: true, maxAge: -1 })

  return response
}
