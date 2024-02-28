import styled from '@emotion/styled'
import { useState } from 'react'

const TabWrapper = styled.ul`
  li {
    padding: 4px 12px;
    border-radius: 4px;
    transition: 0.2s;
    &.active {
      background-color: orangered;
      color: white;
    }
  }
`

type TabProps = {
  defaultActiveKey?: React.Key
  items?: {
    key: React.Key
    label?: React.ReactNode
  }[]
  onChange?: (activeKey: React.Key) => void
}

export function Tab({ defaultActiveKey, items = [], onChange }: TabProps) {
  const [activeKey, setActiveKey] = useState<React.Key | undefined | null>(defaultActiveKey || items?.[0]?.key)
  
  return (
    <TabWrapper>
      <ul>
        {items.map(({ key, label }) => (
          <li
            key={key}
            className={key === activeKey ? 'active' : ''}
            onClick={() => {
              setActiveKey(key)
              onChange?.(key)
            }}>{label}</li>
        ))}
      </ul>
    </TabWrapper>
  )
}