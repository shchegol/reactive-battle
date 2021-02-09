import { AuthRootState, AuthState } from '@store/types';

const authSelector = (state: AuthRootState): AuthState => state.auth;
export default authSelector;
