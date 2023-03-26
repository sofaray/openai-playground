import { ReactElement, useEffect } from 'react'
import DashboardFooter from '@/components/containers/dashboard/dashboard-footer'
import DashboardHeader from '@/components/containers/dashboard/dashboard-header'
import DashboardSidebar from '@/components/containers/dashboard/dashboard-sidebar'
import Box from '@/components/elements/box'
import { CustomToaster } from '@/components/elements/toast'
import useAuthentication from '@/hooks/use-authentication'
import sessionStore from '@/stores/session-store'

export const layoutDashboard = (page: ReactElement) => <Layout>{page}</Layout>

type LayoutProps = Required<{
  readonly children: ReactElement
}>

export function Layout({ children }: LayoutProps) {
  const { session } = sessionStore()
  const { handleNotLoggedIn } = useAuthentication()

  useEffect(() => {
    ;(async () => {
      await handleNotLoggedIn()
    })()
  }, [session])

  return (
    <>
      <Box className='flex-1 flex flex-col h-screen overflow-hidden'>
        <DashboardHeader />
        <Box className='flex overflow-hidden h-full'>
          <DashboardSidebar />
          <Box className='bg-black bg-opacity-[0.04] flex-grow min-h-full p-4 md:p-10 pb-0 overflow-y-scroll flex flex-col justify-between'>
            <Box className={'w-full max-w-[800px] mx-auto'}>{children}</Box>
            <DashboardFooter />
          </Box>
        </Box>
      </Box>
      <CustomToaster />
    </>
  )
}
