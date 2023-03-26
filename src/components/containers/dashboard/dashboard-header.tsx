import { memo } from 'react'
import AccountMenu from '@/components/containers/account-menu'

import Box from '@/components/elements/box'
import Button from '@/components/elements/button'
import Icon from '@/components/elements/icon'
import Logo from '@/components/elements/logo'

const DashboardHeader = memo(() => {
  return (
    <header className='px-4 lg:px-10 py-3 border-b border-b-[2px] border-b-grey bg-white flex items-center justify-between'>
      <Logo />
      <Box className='flex items-center gap-8'>
        <Button variant='icon'>
          <Icon name='notifications' className='text-black-light' size={32} />
        </Button>

        <AccountMenu />
      </Box>
    </header>
  )
})

export default DashboardHeader
