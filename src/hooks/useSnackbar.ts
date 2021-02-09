import { useDispatch } from 'react-redux';
import {
  showSnackbar as showSnackbarAC,
  hideSnackbar as hideSnackbarAC,
} from '@store/actionsCreators/snackbar';
import { TUseSnackbar, TShowSnackbar } from '@root/hooks/types';

export default function useSnackbar(): TUseSnackbar {
  const dispatch = useDispatch();

  const showSnackbar: TShowSnackbar = (message, type, duration) => {
    dispatch(showSnackbarAC({ message, type, duration }));
  };

  const hideSnackbar = () => {
    dispatch(hideSnackbarAC());
  };

  return [showSnackbar, hideSnackbar];
}
