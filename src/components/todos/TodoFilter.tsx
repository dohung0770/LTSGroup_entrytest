import styled from '@emotion/styled'
import { Button, Tab } from '../shareable'
import { useAppDispatch, useAppSelector } from '@/store'
import { changeFilterType, removeAllCompleted } from '@/store/slices/todo'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
  margin-top: 20px;

  ul {
    display: flex;
    gap: 10px;

    li {
      list-style: none;
      cursor: pointer;
    }
  }
`

export function TodoFilter() {
  const dispatch = useAppDispatch()
  const { activeCount } = useAppSelector(state => state.todos)

  const handleChangeFilter = (activeKey: React.Key) => {
    dispatch(changeFilterType(
      activeKey === 1 ? 'ACTIVE' : activeKey === 2 ? 'COMPLETED' : 'ALL')
    )
  }

  return (
    <Row>
      <span>{activeCount} items left!</span>

      <Tab
        items={[
          { key: 0, label: 'All' },
          { key: 1, label: 'Active' },
          { key: 2, label: 'Completed' }
        ]}
        onChange={handleChangeFilter}
      />

      <Button
        onClick={() => dispatch(removeAllCompleted())}>Clear completed</Button>
    </Row>
  )
}
