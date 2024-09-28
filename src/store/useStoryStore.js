import { create } from 'zustand';

const useStoryStore = create((set) => ({
  storyData: null, // Initially, there is no story data
  setStoryData: (data) => set({ storyData: data }), // Method to set the story data
}));

export default useStoryStore;
