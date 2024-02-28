import { ZodType, z } from 'zod'

export type Todo = {
  id: React.Key
  title: string
  completed?: boolean
  createdDate?: Date | string
}

export type FilterBy = 'ALL' | 'ACTIVE' | 'COMPLETED'

export type TodoFormData = Pick<Todo, 'title'>

export const todoSchema: ZodType<TodoFormData> = z.object({
  title: z.string().min(1, 'This field is required')
})
