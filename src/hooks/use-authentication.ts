import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
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
  const { setSession } = sessionStore()

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
        location.href = '/'
      })
  }

  return {
    initAuthState,
    handleSignOut,
  }
}

export default useAuthentication
