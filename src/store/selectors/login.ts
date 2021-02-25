import { ApplicationState } from '@store/types';

const loginSelector = (state: ApplicationState): string => state.user.info.login;
export default loginSelector;
