import { memo } from 'react'
import SideMenuHeader from '@/components/elements/side-menu-header'
import SideMenuItem from '@/components/elements/side-menu-item'

const DashboardSidebar = memo(() => {
  return (
    <nav className='bg-white px-2 py-10 border-r border-r-grey overflow-y-scroll overflow-x-visible hidden lg:block'>
      <ul>
        <SideMenuItem title='遊園地' icon='attractions' href='/dashboard/playground' />

        <SideMenuHeader title='設定' />
        <SideMenuItem title='アカウント設定' icon='settings' href='/dashboard/account' />
      </ul>
    </nav>
  )
})

export default DashboardSidebar
