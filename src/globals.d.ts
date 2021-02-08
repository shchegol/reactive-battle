import { ApplicationState } from '@store/types';

declare global {
  interface Window {
    __PRELOADED_STATE__?: ApplicationState
  }
}
