import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'
import Box from '@/components/elements/box'
import Icon from '@/components/elements/icon'

interface Props {
  title: ReactNode
  icon: string
  href: string
  target?: HTMLAttributeAnchorTarget
}

const SideMenuItem = ({ title, icon, href, target, ...props }: Props) => {
  const router = useRouter()
  const classNames = clsx([
    'flex gap-2 p-4 w-full rounded-lg cursor-pointer transition-all duration-150',
    'font-semibold text-black whitespace-pre',
    'hover:text-primary hover:bg-primary-transparent',
    { 'bg-primary-transparent !text-primary': router.pathname === href },
  ])
  return (
    <li>
      <Link href={href} target={target}>
        <Box className={classNames}>
          <Icon name={icon} />
          {title}
        </Box>
      </Link>
    </li>
  )
}

export default SideMenuItem
