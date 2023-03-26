import { getAuth, onAuthStateChanged, signInWithPopup, signOut, OAuthProvider } from 'firebase/auth'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
import useLocale from './use-locale'
import sessionStore from '@/stores/session-store'

const auth = getAuth()

/**
 * [Reference]
 * https://firebase.google.com/docs/auth/web/passing-state-in-email-actions?hl=ja#passing_statecontinue_url_in_email_actions
 *
 */

const useAuthentication = () => {
  const { t } = useLocale()
  const router = useRouter()
  const { session, setSession } = sessionStore()

  /**
   * Set up a listener to retrieve Firebase authentication state during screen initialization.
   * If logged in, also get the user's profile.
   */
  const initAuthState = () => {
    const removeListener = onAuthStateChanged(auth, async (user) => {
      setSession(user)
    })

    return () => {
      removeListener()
    }
  }

  /**
   * This is a router guard.
   * It prevents logged-in users from navigating to the sign-in screen.
   */
  const handleLoggedIn = () => {
    if (session && router.pathname !== '/') {
      return router.push('/')
    }
  }

  /**
   * Sign out of Firebase and redirect to the top page.
   */
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setSession(null)
        toast.success(t.session.signoutSuccess)
      })
      .catch(() => {
        toast.error(t.session.signoutError)
      })
      .finally(() => {
        return router.push('/signin')
      })
  }

  /**
   *  Pop up a screen and call social login.
   */
  const handleSignInWithPopup = (provider: OAuthProvider) => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        OAuthProvider.credentialFromResult(result)
        return router.push('/dashboard')
      })
      .catch((error) => {
        return error
      })
  }

  /**
   * This is a router guard.
   * It prevents un-logged-in users from moving to a screen that requires authentication.
   */
  const handleNotLoggedIn = () => {
    if (session === null && router.pathname !== '/signin') {
      return router.push('/signin')
    }
  }

  return {
    initAuthState,
    handleLoggedIn,
    handleSignOut,
    handleNotLoggedIn,
    handleSignInWithPopup,
  }
}

export default useAuthentication
