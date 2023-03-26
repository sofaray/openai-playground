import { useEffect } from 'react'
import useAuthentication from '@/hooks/use-authentication'

const Signout = () => {
  const { handleSignOut } = useAuthentication()

  useEffect(() => {
    handleSignOut()
  }, [])

  return <></>
}

export default Signout
