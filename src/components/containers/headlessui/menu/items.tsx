import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}
const Items = ({ className, children }: Props) => {
  const classNames = clsx([
    'z-10 absolute mt-2 py-2 w-56 origin-top-right rounded-lg bg-white shadow ring-opacity-5 focus:outline-none',
    className,
  ])

  return (
    <Transition
      as={Fragment}
      enter='transition ease-out duration-100'
      enterFrom='transform opacity-0 scale-95'
      enterTo='transform opacity-100 scale-100'
      leave='transition ease-in duration-75'
      leaveFrom='transform opacity-100 scale-100'
      leaveTo='transform opacity-0 scale-95'
    >
      <Menu.Items className={classNames}>{children}</Menu.Items>
    </Transition>
  )
}

export default Items
