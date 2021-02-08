// import { useHistory } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUrlParam } from '@helpers/UrlHelper';
// import { ApplicationState } from '@store/types';
// import { yaOauth } from '@store/actionsCreators/auth';
// import { fetchUser } from '@store/actionsCreators/user';
// import authSelector from '../store/selectors/auth';

export default function useAuth(): [() => void] {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const auth = useSelector(authSelector);
  // const login = useSelector((state: ApplicationState) => state.user.info.login);
  // const code = getUrlParam('code');
  // const cachedLogin = localStorage.getItem('userLogin');

  // if (code) {
  //     dispatch(yaOauth(code));
  // } else if (isLoggedIn && !login) {
  //     dispatch(fetchUser());
  // }

  const checkAuthStatus = (): void => {
    // if (auth.isLoggedIn && auth.isLoading) {
    //
    // }
    //
    // if (auth.error) {
    //
    // }
  };
  return [checkAuthStatus];
}
