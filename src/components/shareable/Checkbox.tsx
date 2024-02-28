import styled from '@emotion/styled'

const CheckboxEl = styled.input`
  border-radius: 50%;
  width: 22px;
  aspect-ratio: 1 / 1;
  border-color: 1px solid gray;
`

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>

export function Checkbox(props: CheckboxProps) {
  return <CheckboxEl {...props} type='checkbox' />
}