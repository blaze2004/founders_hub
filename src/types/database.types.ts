export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Feed: {
        Row: {
          author: string | null
          category: string | null
          content: Json | null
          created_at: string
          id: number
          tags: string[] | null
          title: string | null
        }
        Insert: {
          author?: string | null
          category?: string | null
          content?: Json | null
          created_at?: string
          id?: number
          tags?: string[] | null
          title?: string | null
        }
        Update: {
          author?: string | null
          category?: string | null
          content?: Json | null
          created_at?: string
          id?: number
          tags?: string[] | null
          title?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'Feed_author_fkey'
            columns: ['author']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
