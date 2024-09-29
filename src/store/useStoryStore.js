import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

const useStoryStore = create(
  persist(
    (set) => ({
      storyData: null,
      setStoryData: (data) => set({ storyData: data }),
    }),
    {
      name: 'story-data',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
  )

export default useStoryStore;