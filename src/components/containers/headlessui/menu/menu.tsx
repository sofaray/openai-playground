import { Menu as HMenu } from '@headlessui/react'
import clsx from 'clsx'
import { ReactNode } from 'react'
import Divider from '@/components/containers/headlessui/menu/divider'
import Item from '@/components/containers/headlessui/menu/item'
import Items from '@/components/containers/headlessui/menu/items'
import Box from '@/components/elements/box'

interface Props {
  className?: string
  children?: ReactNode
}

const Menu = ({ className, children }: Props) => {
  const classNames = clsx(['leading-[0] relative', className])

  return (
    <Box className={classNames}>
      <HMenu>{children}</HMenu>
    </Box>
  )
}

Menu.Divider = Divider
Menu.Items = Items
Menu.Item = Item
Menu.Button = HMenu.Button

export default Menu
