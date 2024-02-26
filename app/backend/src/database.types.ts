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
      drinks: {
        Row: {
          area: string | null
          category: string | null
          id: number
          ingredient_1: string | null
          ingredient_10: string | null
          ingredient_11: string | null
          ingredient_12: string | null
          ingredient_13: string | null
          ingredient_14: string | null
          ingredient_15: string | null
          ingredient_16: string | null
          ingredient_17: string | null
          ingredient_18: string | null
          ingredient_19: string | null
          ingredient_2: string | null
          ingredient_20: string | null
          ingredient_3: string | null
          ingredient_4: string | null
          ingredient_5: string | null
          ingredient_6: string | null
          ingredient_7: string | null
          ingredient_8: string | null
          ingredient_9: string | null
          instructions: string
          measure_1: string | null
          measure_10: string | null
          measure_11: string | null
          measure_12: string | null
          measure_13: string | null
          measure_14: string | null
          measure_15: string | null
          measure_16: string | null
          measure_17: string | null
          measure_18: string | null
          measure_19: string | null
          measure_2: string | null
          measure_20: string | null
          measure_3: string | null
          measure_4: string | null
          measure_5: string | null
          measure_6: string | null
          measure_7: string | null
          measure_8: string | null
          measure_9: string | null
          name: string
          source: string | null
          tags: string | null
          thumb: string | null
          video: string | null
        }
        Insert: {
          area?: string | null
          category?: string | null
          id: number
          ingredient_1?: string | null
          ingredient_10?: string | null
          ingredient_11?: string | null
          ingredient_12?: string | null
          ingredient_13?: string | null
          ingredient_14?: string | null
          ingredient_15?: string | null
          ingredient_16?: string | null
          ingredient_17?: string | null
          ingredient_18?: string | null
          ingredient_19?: string | null
          ingredient_2?: string | null
          ingredient_20?: string | null
          ingredient_3?: string | null
          ingredient_4?: string | null
          ingredient_5?: string | null
          ingredient_6?: string | null
          ingredient_7?: string | null
          ingredient_8?: string | null
          ingredient_9?: string | null
          instructions: string
          measure_1?: string | null
          measure_10?: string | null
          measure_11?: string | null
          measure_12?: string | null
          measure_13?: string | null
          measure_14?: string | null
          measure_15?: string | null
          measure_16?: string | null
          measure_17?: string | null
          measure_18?: string | null
          measure_19?: string | null
          measure_2?: string | null
          measure_20?: string | null
          measure_3?: string | null
          measure_4?: string | null
          measure_5?: string | null
          measure_6?: string | null
          measure_7?: string | null
          measure_8?: string | null
          measure_9?: string | null
          name: string
          source?: string | null
          tags?: string | null
          thumb?: string | null
          video?: string | null
        }
        Update: {
          area?: string | null
          category?: string | null
          id?: number
          ingredient_1?: string | null
          ingredient_10?: string | null
          ingredient_11?: string | null
          ingredient_12?: string | null
          ingredient_13?: string | null
          ingredient_14?: string | null
          ingredient_15?: string | null
          ingredient_16?: string | null
          ingredient_17?: string | null
          ingredient_18?: string | null
          ingredient_19?: string | null
          ingredient_2?: string | null
          ingredient_20?: string | null
          ingredient_3?: string | null
          ingredient_4?: string | null
          ingredient_5?: string | null
          ingredient_6?: string | null
          ingredient_7?: string | null
          ingredient_8?: string | null
          ingredient_9?: string | null
          instructions?: string
          measure_1?: string | null
          measure_10?: string | null
          measure_11?: string | null
          measure_12?: string | null
          measure_13?: string | null
          measure_14?: string | null
          measure_15?: string | null
          measure_16?: string | null
          measure_17?: string | null
          measure_18?: string | null
          measure_19?: string | null
          measure_2?: string | null
          measure_20?: string | null
          measure_3?: string | null
          measure_4?: string | null
          measure_5?: string | null
          measure_6?: string | null
          measure_7?: string | null
          measure_8?: string | null
          measure_9?: string | null
          name?: string
          source?: string | null
          tags?: string | null
          thumb?: string | null
          video?: string | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          drink_id: number | null
          id: number
          meal_id: number | null
          user_id: number
        }
        Insert: {
          drink_id?: number | null
          id?: number
          meal_id?: number | null
          user_id: number
        }
        Update: {
          drink_id?: number | null
          id?: number
          meal_id?: number | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "favorites_drink_id_fkey"
            columns: ["drink_id"]
            isOneToOne: false
            referencedRelation: "drinks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_meal_id_fkey"
            columns: ["meal_id"]
            isOneToOne: false
            referencedRelation: "meals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      meals: {
        Row: {
          area: string | null
          category: string | null
          id: number
          imageSource: string | null
          ingredient_1: string | null
          ingredient_10: string | null
          ingredient_11: string | null
          ingredient_12: string | null
          ingredient_13: string | null
          ingredient_14: string | null
          ingredient_15: string | null
          ingredient_16: string | null
          ingredient_17: string | null
          ingredient_18: string | null
          ingredient_19: string | null
          ingredient_2: string | null
          ingredient_20: string | null
          ingredient_3: string | null
          ingredient_4: string | null
          ingredient_5: string | null
          ingredient_6: string | null
          ingredient_7: string | null
          ingredient_8: string | null
          ingredient_9: string | null
          instructions: string | null
          measure_1: string | null
          measure_10: string | null
          measure_11: string | null
          measure_12: string | null
          measure_13: string | null
          measure_14: string | null
          measure_15: string | null
          measure_16: string | null
          measure_17: string | null
          measure_18: string | null
          measure_19: string | null
          measure_2: string | null
          measure_20: string | null
          measure_3: string | null
          measure_4: string | null
          measure_5: string | null
          measure_6: string | null
          measure_7: string | null
          measure_8: string | null
          measure_9: string | null
          name: string | null
          source: string | null
          tags: string | null
          thumb: string | null
          video: string | null
        }
        Insert: {
          area?: string | null
          category?: string | null
          id: number
          imageSource?: string | null
          ingredient_1?: string | null
          ingredient_10?: string | null
          ingredient_11?: string | null
          ingredient_12?: string | null
          ingredient_13?: string | null
          ingredient_14?: string | null
          ingredient_15?: string | null
          ingredient_16?: string | null
          ingredient_17?: string | null
          ingredient_18?: string | null
          ingredient_19?: string | null
          ingredient_2?: string | null
          ingredient_20?: string | null
          ingredient_3?: string | null
          ingredient_4?: string | null
          ingredient_5?: string | null
          ingredient_6?: string | null
          ingredient_7?: string | null
          ingredient_8?: string | null
          ingredient_9?: string | null
          instructions?: string | null
          measure_1?: string | null
          measure_10?: string | null
          measure_11?: string | null
          measure_12?: string | null
          measure_13?: string | null
          measure_14?: string | null
          measure_15?: string | null
          measure_16?: string | null
          measure_17?: string | null
          measure_18?: string | null
          measure_19?: string | null
          measure_2?: string | null
          measure_20?: string | null
          measure_3?: string | null
          measure_4?: string | null
          measure_5?: string | null
          measure_6?: string | null
          measure_7?: string | null
          measure_8?: string | null
          measure_9?: string | null
          name?: string | null
          source?: string | null
          tags?: string | null
          thumb?: string | null
          video?: string | null
        }
        Update: {
          area?: string | null
          category?: string | null
          id?: number
          imageSource?: string | null
          ingredient_1?: string | null
          ingredient_10?: string | null
          ingredient_11?: string | null
          ingredient_12?: string | null
          ingredient_13?: string | null
          ingredient_14?: string | null
          ingredient_15?: string | null
          ingredient_16?: string | null
          ingredient_17?: string | null
          ingredient_18?: string | null
          ingredient_19?: string | null
          ingredient_2?: string | null
          ingredient_20?: string | null
          ingredient_3?: string | null
          ingredient_4?: string | null
          ingredient_5?: string | null
          ingredient_6?: string | null
          ingredient_7?: string | null
          ingredient_8?: string | null
          ingredient_9?: string | null
          instructions?: string | null
          measure_1?: string | null
          measure_10?: string | null
          measure_11?: string | null
          measure_12?: string | null
          measure_13?: string | null
          measure_14?: string | null
          measure_15?: string | null
          measure_16?: string | null
          measure_17?: string | null
          measure_18?: string | null
          measure_19?: string | null
          measure_2?: string | null
          measure_20?: string | null
          measure_3?: string | null
          measure_4?: string | null
          measure_5?: string | null
          measure_6?: string | null
          measure_7?: string | null
          measure_8?: string | null
          measure_9?: string | null
          name?: string | null
          source?: string | null
          tags?: string | null
          thumb?: string | null
          video?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          email: string
          id: number
          password: string
          role: string
          username: string
        }
        Insert: {
          email: string
          id?: number
          password: string
          role: string
          username: string
        }
        Update: {
          email?: string
          id?: number
          password?: string
          role?: string
          username?: string
        }
        Relationships: []
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

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
