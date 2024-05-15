import { create } from "zustand";

const useStore = create((set) => ({
    guestData: {},
    setGuestData: (data) => set({guestData: data}),
}))

export { useStore }