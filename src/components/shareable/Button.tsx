import styled from '@emotion/styled'
import clsx from 'clsx'

export const ButtonEl = styled.button`
  padding: 7px 10px;
  min-width: fit-content;
  cursor: pointer;

  &.outlined {
    background-color: transparent;
    border: none;
    outline: none;
  }
`

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  outlined?: boolean
}

export function Button({ outlined, children, className, ...props }: React.PropsWithChildren<ButtonProps>) {
  return (
    <ButtonEl
      {...props}
      className={clsx(
        className,
        outlined ? 'outlined' : 'default'
      )}>{children}</ButtonEl>
  )
}
