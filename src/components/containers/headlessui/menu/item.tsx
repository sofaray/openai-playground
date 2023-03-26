import { Menu } from '@headlessui/react'
import React, { ReactNode } from 'react'
import Box from '@/components/elements/box'

interface Props extends React.ComponentProps<any> {
  children?: ReactNode
}
const Item = ({ children, ...props }: Props) => {
  return (
    <Menu.Item {...props}>
      {({ active, disabled }) => (
        <Box
          className={`
          ${disabled ? '!text-black-light cursor-not-allowed' : ''}
          ${active ? 'bg-primary-transparent !text-primary' : ''}
          text-black group flex w-full items-center px-4 py-3 text-sm font-normal cursor-pointer `}
        >
          {children}
        </Box>
      )}
    </Menu.Item>
  )
}

export default Item
