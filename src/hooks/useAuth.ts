import { useDispatch, useSelector } from 'react-redux';
import { SignUpRequest, UserRequest } from '@api/types';
import { TUseAuth } from '@root/hooks/types';
import {
  signin as signinAC,
  signup as signupAC,
  logout as logoutAC,
} from '@store/actionsCreators/auth';
import authSelector from '../store/selectors/auth';

const useAuth = (): TUseAuth => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  const { isLoggedIn } = auth;

  const signin = (data: UserRequest): void => {
    dispatch(signinAC(data));
  };

  const signup = (data: SignUpRequest): void => {
    dispatch(signupAC(data));
  };

  const logout = (): void => {
    dispatch(logoutAC());
  };

  return [
    isLoggedIn, signin, signup, logout,
  ];
};

export default useAuth;
