import { UserRootState } from '@store/types';
import { UserResponse } from '@api/types';

const userSelector = (state: UserRootState): UserResponse => state.user.info;
export default userSelector;
