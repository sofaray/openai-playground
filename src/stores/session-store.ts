import { User } from '@firebase/auth'
import { create } from 'zustand'

interface SessionState {
  session: User | null | undefined
  setSession: (session: User | null) => void
}

const sessionStore = create<SessionState>((set) => ({
  session: undefined,
  setSession: (session) => set({ session }),
}))

export default sessionStore
