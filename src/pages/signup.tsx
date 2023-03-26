import Head from '@/components/elements/head'
import { layoutDefault } from '@/components/layouts/default'
import SignupTemplate from '@/components/templates/signup-template'
import useAuthentication from '@/hooks/use-authentication'

const Signup = () => {
  const { handleLoggedIn } = useAuthentication()

  handleLoggedIn()

  return (
    <>
      <Head title='Sign Up' />
      <SignupTemplate />
    </>
  )
}

Signup.layout = layoutDefault

export default Signup
