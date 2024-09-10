import { create } from "zustand";

const useStore = create((set) => ({
    guestData: {
        id: 1,
        name: 'John Doe',
        sesi: 1,
        slug: 'john-doe',
        created_at: null,
        updated_at: '2024-05-22T03:50:51.000000Z'
    },

    setGuestData: (data) => set({ guestData: data }),
}))

export { useStore }