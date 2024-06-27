import prisma from '@/lib/prisma'

export interface User {
  email: string
  id: string
  password: string
}

export async function getUserById(email: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { email } })
}

export async function createUser(data: Omit<User, 'id'>): Promise<User> {
  return prisma.user.create({ data })
}
