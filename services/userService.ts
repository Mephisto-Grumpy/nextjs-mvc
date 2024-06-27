import { User, createUser, getUserById } from '@/models/user'

export async function fetchUser(id: string): Promise<User | null> {
  return getUserById(id)
}

export async function registerUser(data: Omit<User, 'id'>): Promise<User> {
  return createUser(data)
}
