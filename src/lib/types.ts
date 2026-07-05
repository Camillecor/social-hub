// src/lib/types.ts

export type User = {
  id: string
  email: string
  created_at: string
}

export type Post = {
  id: string
  user_id: string
  content: string
  platforms: string[]
