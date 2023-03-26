import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '@/plugins/firebase/init'
import meStore from '@/stores/me-store'
import sessionStore from '@/stores/session-store'

const useMe = () => {
  const { me, setMe, isLoading, setIsLoading } = meStore()
  const { session } = sessionStore()

  const getMe = async (uid: string) => {
    if (!isLoading) return me
    try {
      const docRef = doc(db, 'users', uid)
      const docSnap = await getDoc(docRef)
      docSnap.data()
      const res = docSnap.data() as User
      setMe(res)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const updateMe = async (params: User) => {
    if (session) {
      const res = await setDoc(doc(db, 'users', session.uid), params)
      // setMe(res)
      console.log(res)
    }
  }

  return { getMe, updateMe }
}

export default useMe
