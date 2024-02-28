import styled from '@emotion/styled'
import { useAppSelector } from '@/store'
import { TodoItem } from './TodoItem'

const TodoListWrapper = styled.ul`
  .empty-label {
    margin-top: 20px;
    color: #a0a0a0;
    font-size: 15px;
  }
`

export function TodoList() {
  const { todos, filterBy } = useAppSelector(state => state.todos)

  const dataSource = filterBy === 'ALL'
    ? todos
    : todos.filter(todo => filterBy === 'ACTIVE' ? !todo.completed : todo.completed)

  return (
    <TodoListWrapper>
      {!dataSource.length && <p className='empty-label'>No items</p>}

      {dataSource.map(todo => (
        <TodoItem key={todo.id} data={todo} />
      ))}
    </TodoListWrapper>
  )
}
