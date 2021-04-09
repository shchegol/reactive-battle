import { ApplicationState } from '@store/types';

declare global {
  interface Window {
    browserHistory?: any;
    __PRELOADED_STATE__?: ApplicationState;
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: any;
  }
}
