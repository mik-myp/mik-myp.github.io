import { createStore } from './createStore';

/**
 * 全局状态接口
 */
export interface GlobalState {
  tourOpen: boolean;
  setTourOpen: (tourOpen: boolean) => void;
}

/**
 * 全局状态store
 */
export const useGlobalStore = createStore<GlobalState>(
  (set) => ({
    tourOpen: true,
    setTourOpen: (tourOpen: boolean) => {
      set({
        tourOpen
      });
    }
  }),
  'global'
);
