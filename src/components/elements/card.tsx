import clsx from 'clsx'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children?: ReactNode
  size?: 'base' | 'lg'
}

const Card: FC<Props> = ({ size = 'base', className, children, ...props }: Props) => {
  const classNames = clsx([
    'bg-white rounded-lg border border-grey box-border',
    { 'p-6 sm:p-12': size === 'lg' },
    { 'p-3 sm:p-6': size === 'base' },
    className,
  ])

  return (
    <div {...props} className={classNames}>
      {children}
    </div>
  )
}
export default Card
