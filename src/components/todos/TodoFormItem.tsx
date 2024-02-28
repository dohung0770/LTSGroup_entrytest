import styled from '@emotion/styled'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Input } from '../shareable'
import { Todo, TodoFormData, todoSchema } from '@/models'
import { useAppDispatch } from '@/store'
import { updateTodo } from '@/store/slices/todo'

const Form = styled.form`
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 5px;
  padding: 8px;
`

type TodoFormItemProps = {
  todo: Todo
  onClose?: () => void
}

export function TodoFormItem({ todo, onClose }: TodoFormItemProps) {
  const dispatch = useAppDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: todo.title
    }
  })

  const onSubmit: SubmitHandler<TodoFormData> = (data) => {
    dispatch(updateTodo({ todoId: todo.id, newTodo: data }))
    onClose?.()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder='Update Todo'
        {...register('title')}
        error={errors.title?.message} />

      <Button type='submit'>
        <CheckOutlined />
      </Button>

      <Button onClick={e => {
        e.preventDefault()
        onClose?.()
      }}>
        <CloseOutlined />
      </Button>
    </Form>
  )
}
