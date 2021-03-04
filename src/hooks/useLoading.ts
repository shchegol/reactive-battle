import { useDispatch } from 'react-redux';
import {
  showLoading as showLoadingAC,
  hideLoading as hideLoadingAC,
} from '@store/actionsCreators/loading';
import { TUseLoading } from '@root/hooks/types';

export default function useLoading(): TUseLoading {
  const dispatch = useDispatch();

  const showLoading = () => {
    dispatch(showLoadingAC());
  };

  const hideLoading = () => {
    dispatch(hideLoadingAC());
  };

  return { showLoading, hideLoading };
}
