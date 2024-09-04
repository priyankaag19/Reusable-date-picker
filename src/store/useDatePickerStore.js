import { create } from 'zustand';

const useDatePickerStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrence: 'none',
  customRecurrence: {},
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrence: (recurrence) => set({ recurrence }),
  setCustomRecurrence: (customRecurrence) => set({ customRecurrence }),
}));

export default useDatePickerStore;
