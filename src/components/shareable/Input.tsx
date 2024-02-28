import { forwardRef } from 'react'
import styled from '@emotion/styled'
import clsx from 'clsx'

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;

  .input-error-helper-text {
    color: red;
    font-size: 13px;
  }

  input.has-error {
    border-color: red;
  }
`

const InputEl = styled.input`
  height: 33px;
  padding: 0 8px;
  width: 100%;
`

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function({ error, className, ...props }, ref) {
  return (
    <InputWrapper>
      <InputEl
        ref={ref}
        {...props}
        className={clsx(
          className,
          error ? 'has-error' : ''
        )} />
      {error && <span className='input-error-helper-text'>{error}</span>}
    </InputWrapper>
  )
})
