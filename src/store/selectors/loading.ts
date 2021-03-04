import { LoadingRootState, LoadingState } from '@store/types';

const LoadingSelector = (state: LoadingRootState): LoadingState => state.loading;
export default LoadingSelector;
