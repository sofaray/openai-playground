import { HTMLProps, ReactNode, forwardRef } from 'react'

interface Props extends HTMLProps<HTMLDivElement> {
  className?: string
  children?: ReactNode
}

const Box = forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  )
})
export default Box
