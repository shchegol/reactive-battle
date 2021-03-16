import { ForumRootState, ForumState } from '@store/types';

const forumSelector = (state: ForumRootState): ForumState => state.forum;

export default forumSelector;
