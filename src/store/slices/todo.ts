import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'
import { FilterBy, Todo } from "@/models";

const initialState: {
  todos: Todo[]
  filterBy: FilterBy
  activeCount: number
} = {
  todos: [],
  filterBy: 'ALL',
  activeCount: 0
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Pick<Todo, 'title' | 'completed'>>) {
      state.todos.push({ ...action.payload, id: nanoid(), completed: false })
      state.activeCount++
    },
    updateTodo(state, action: PayloadAction<{ todoId: React.Key, newTodo: Pick<Todo, 'title'> }>) {
      const { todoId, newTodo } = action.payload

      const todo = state.todos.find(todo => todo.id === todoId)

      if (!todo) throw new Error('Todo not found!')

      todo.title = newTodo.title
    },
    removeTodo(state, action: PayloadAction<React.Key>) {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo && !todo.completed) {
        state.activeCount--
      }

      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleCompletion(state, action: PayloadAction<React.Key>) {
      const todo = state.todos.find(todo => todo.id === action.payload)

      if (todo) {
        state.activeCount += (todo.completed ? 1 : -1)
        todo.completed = !todo.completed
      }
    },
    toggleCompletionAll(state, action: PayloadAction<boolean>) {
      state.todos = state.todos.map(todo => ({ ...todo, completed: action.payload }))
      state.activeCount = action.payload ? 0 : state.todos.length
    },
    removeAllCompleted(state) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state.todos = state.todos.filter(todo => todo.completed !== true)
    },
    changeFilterType(state, action: PayloadAction<FilterBy>) {
      state.filterBy = action.payload
    }
  }
})

export const {
  addTodo,
  updateTodo,
  removeAllCompleted,
  removeTodo,
  toggleCompletion,
  toggleCompletionAll,
  changeFilterType } = todosSlice.actions
export default todosSlice.reducer
