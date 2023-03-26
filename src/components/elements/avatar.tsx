import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import Box from '@/components/elements/box'
import Icon from '@/components/elements/icon'

interface Props {
  src?: string
  rounded?: boolean
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  className?: string
}

const avatarSizes = {
  xs: 24,
  sm: 32,
  base: 48,
  lg: 64,
  xl: 96,
  '2xl': 128,
}

const Avatar: FC<Props> = ({ src, rounded = true, size = 'base', className, ...props }: Props) => {
  const classNames = clsx([
    'bg-grey-transparent w-fit',
    {
      'border border-grey rounded-full': rounded,
    },
    className,
  ])

  const imgClassNames = clsx([
    'object-cover',
    { 'rounded-full': rounded },
    `w-[${avatarSizes[size]}px]`,
    `h-[${avatarSizes[size]}px]`,
  ])

  return (
    <Box className={classNames}>
      {src ? (
        <Image
          {...props}
          src={src}
          alt='Avatar'
          className={imgClassNames}
          width={avatarSizes[size]}
          height={avatarSizes[size]}
        />
      ) : (
        <Icon name={'lunch_dining'} size={avatarSizes[size] - 16} className={'p-2 text-black-light'} />
      )}
    </Box>
  )
}
export default Avatar
