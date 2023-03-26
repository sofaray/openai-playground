import clsx from 'clsx'
import { FC, ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string

  icon?: ReactNode
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'transparent' | 'icon'

  outlined?: boolean
  rounded?: boolean
  square?: boolean
}

const Button: FC<Props> = ({
  className,
  icon,
  variant = 'primary',
  rounded = true,
  square,
  outlined,
  ...props
}: Props) => {
  const classNames = clsx([
    className,
    'leading-normal text-sm font-semibold py-3 px-4 flex justify-center items-center gap-2 disabled:hover:cursor-not-allowed duration-75 transition-all ease-in',
    {
      'rounded-md': square,
    },
    {
      'rounded-full': rounded,
    },
    {
      'text-white bg-primary hover:bg-primary-dark disabled:bg-primary-light': !outlined && variant === 'primary',
    },
    {
      'text-black disabled:opacity-60': !outlined && variant === 'secondary',
    },
    {
      'border bg-transparent': outlined,
    },
    {
      'text-primary border-primary hover:bg-primary-transparent disabled:bg-transparent disabled:opacity-60':
        outlined && variant === 'primary',
    },
    {
      'text-black border-grey hover:bg-grey-transparent disabled:opacity-60 disabled:hover:bg-transparent':
        outlined && variant === 'secondary',
    },
    {
      '!p-0 leading-[0]  w-fit h-fit rounded-full hover:bg-grey-transparent  hover:ring-4 hover:ring-grey-transparent':
        variant === 'icon',
    },
    {
      'bg-transparent border-0 hover:bg-grey-transparent': variant === 'transparent',
    },
  ])

  return (
    <button {...props} className={classNames}>
      {icon && <span>{icon}</span>}
      <span className='flex-grow'>{props.children}</span>
    </button>
  )
}
export default Button
