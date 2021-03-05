import { useDispatch } from 'react-redux';
import {
  showSnackbar as showSnackbarAC,
  hideSnackbar as hideSnackbarAC,
} from '@store/actionsCreators/snackbar';
import { UseSnackbar, ShowSnackbar } from '@root/hooks/types';

export default function useSnackbar(): UseSnackbar {
  const dispatch = useDispatch();

  const showSnackbar: ShowSnackbar = (message, type, duration = 10) => {
    dispatch(showSnackbarAC({ message, type, duration }));
  };

  const hideSnackbar = () => {
    dispatch(hideSnackbarAC());
  };

  return { showSnackbar, hideSnackbar };
}
