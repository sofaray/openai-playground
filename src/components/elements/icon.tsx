import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLImageElement | HTMLDivElement> {
  name: string
  className?: string
  size?: number
  fill?: boolean
}

const Icon: FC<Props> = ({ name, className, fill, size, ...props }: Props) => {
  const classNames = clsx(['material-symbols-rounded block', { fill }, className])

  return (
    <i className={classNames} style={{ fontSize: size }} {...props}>
      {name}
    </i>
  )
}

export default Icon
