import { getAuth, onAuthStateChanged } from 'firebase/auth'
import sessionStore from '@/stores/session-store'

const auth = getAuth()

/**
 * [Reference]
 * https://firebase.google.com/docs/auth/web/passing-state-in-email-actions?hl=ja#passing_statecontinue_url_in_email_actions
 *
 */

const useAuthentication = () => {
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

  return {
    initAuthState,
  }
}

export default useAuthentication
