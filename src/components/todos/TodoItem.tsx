import { useState } from 'react'
import styled from '@emotion/styled'
import { CloseOutlined } from '@ant-design/icons'
import { Button, Checkbox } from '../shareable'
import { Todo } from '@/models'
import { useAppDispatch } from '@/store'
import { removeTodo, toggleCompletion } from '@/store/slices/todo'
import { TodoFormItem } from './TodoFormItem'

const Item = styled.li`
  width: 100%;
  list-style: none;
  padding: 8px;
  display: flex;
  gap: 10px;
  align-items: center;
  min-height: 50px;
  &:not(:last-child) {
    border-bottom: 1px solid #d9d9d9;
  }
  &:hover button {
    display: block;
  }

  label.completed {
    color: #949494;
    text-decoration: line-through;
  }

  button {
    margin-left: auto;
    display: none;
  }
`

type TodoItemProps = {
  data: Todo
}

export function TodoItem({ data }: TodoItemProps) {
  const dispatch = useAppDispatch()

  const [isEditting, setIsEditting] = useState(false)

  if (isEditting) {
    return (
      <TodoFormItem
        todo={data}
        onClose={() => setIsEditting(false)} />
    )
  }

  return (
    <Item onDoubleClick={() => setIsEditting(true)}>
      <Checkbox
        checked={data.completed}
        onChange={() => dispatch(toggleCompletion(data.id))} />
      <label className={data.completed ? 'completed' : ''}>{data.title}</label>
      <Button
        outlined
        onClick={() => dispatch(removeTodo(data.id))}><CloseOutlined /></Button>
    </Item>
  )
}