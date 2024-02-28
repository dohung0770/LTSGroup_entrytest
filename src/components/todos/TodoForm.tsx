import styled from '@emotion/styled'
import { SubmitHandler, useForm } from 'react-hook-form'
import { CheckOutlined } from '@ant-design/icons'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input } from '@/components/shareable'
import { useAppDispatch, useAppSelector } from '@/store'
import { addTodo, toggleCompletionAll } from '@/store/slices/todo'
import { TodoFormData, todoSchema } from '@/models'

const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`

const Form = styled.form`
  flex: 1;
  display: flex;
  align-items: flex-start;
  gap: 5px;
`

export function TodoForm() {
  const dispatch = useAppDispatch()
  const { todos, activeCount } = useAppSelector(state => state.todos)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: ''
    }
  })

  const onSubmit: SubmitHandler<TodoFormData> = (data) => {
    dispatch(addTodo(data))
    reset({ title: '' })
  }

  const isAllCompleted = todos.length > 0 && activeCount === 0

  return (
    <FormWrapper>
      <Button
        title={isAllCompleted ? 'Partial All' : 'Complete All'}
        onClick={() => dispatch(toggleCompletionAll(!isAllCompleted))}>
        <CheckOutlined style={{ color: isAllCompleted ? 'green' : 'black' }} />
      </Button>

      <Form onSubmit={handleSubmit(onSubmit)}>

        <Input
          placeholder='What needs to be done?'
          {...register('title')}
          error={errors.title?.message} />

        <Button type='submit'>Add Todo</Button>
      </Form>
    </FormWrapper>
  )
}
