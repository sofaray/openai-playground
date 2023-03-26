import clsx from 'clsx'
import Box from '@/components/elements/box'

interface Props {
  title: string
}

const SideMenuHeader = ({ title, ...props }: Props) => {
  const classNames = clsx(['px-4 pb-0 pt-8 w-full text-xs text-black-light'])

  return (
    <li>
      <Box className={classNames}>{title}</Box>
    </li>
  )
}

export default SideMenuHeader
