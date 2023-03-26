import { FC, ReactNode } from 'react'

interface Props {
  className?: string

  children?: ReactNode
}

const Typography: FC<Props> = ({ className, children, ...props }) => {
  return <p className={className}>{children}</p>
}
export default Typography
