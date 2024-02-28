import styled from '@emotion/styled'
import { TodoFilter, TodoForm, TodoList } from '@/components/todos'

const Container = styled.div`
  background-color: var(--bgColor);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow-y: auto;
  padding: 20px 40px;

  .header {
    font-weight: 500;
    font-size: var(--headingSize);
    color: var(--headingColor);
  }
`

const Wrapper = styled.div`
  max-width: 400px;
  text-align: center;
  margin: 40px 0;
  background-color: var(--white);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  min-width: 600px;
  max-width: 800px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2), 0 25px 50px 0 rgba(0,0,0,.1);
`

const Sticky = styled.div`
  position: sticky;
  top: -20px;
  border-bottom: 1px solid #d9d9d9;
  background-color: var(--white);
  padding: 10px 0;
`

export default function Todos() {
  return (
    <Container>
      <h2 className="header">
        Your Todo List
      </h2>

      <Wrapper>
        <Sticky>
          <TodoForm />
          <TodoFilter />
        </Sticky>

        <TodoList />
      </Wrapper>
    </Container>
  )
}