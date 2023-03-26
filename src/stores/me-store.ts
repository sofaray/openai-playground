import { create } from 'zustand'

interface MeState {
  isLoading: boolean
  me: User
  setMe: (me: User) => void
  setIsLoading: (isLoading: boolean) => void
}

const meStore = create<MeState>((set) => ({
  isLoading: true,
  me: {} as User,
  setMe: (me) => set({ me }),
  setIsLoading: (isLoading) => set({ isLoading }),
}))

export default meStore
