import Head from '@/components/elements/head'
import { layoutDashboard } from '@/components/layouts/dashboard'
import AccountTemplate from '@/components/templates/dashboard/account-template'

const DashboardAccount = () => {
  return (
    <>
      <Head title='Account' />
      <AccountTemplate />
    </>
  )
}

DashboardAccount.layout = layoutDashboard

export default DashboardAccount
