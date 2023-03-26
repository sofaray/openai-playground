import Head from '@/components/elements/head'
import { layoutDefault } from '@/components/layouts/default'
import SigninTemplate from '@/components/templates/signin-template'
import useAuthentication from '@/hooks/use-authentication'

const Signin = () => {
  const { handleLoggedIn } = useAuthentication()

  handleLoggedIn()

  return (
    <>
      <Head title='Sign In' />
      <SigninTemplate />
    </>
  )
}

Signin.layout = layoutDefault

export default Signin
