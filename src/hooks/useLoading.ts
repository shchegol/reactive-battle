import { useDispatch } from 'react-redux';
import {
  showLoading as showLoadingAC,
  hideLoading as hideLoadingAC,
} from '@store/actionsCreators/loading';
import { UseLoading } from '@root/hooks/types';

export default function useLoading(): UseLoading {
  const dispatch = useDispatch();

  const showLoading = () => {
    dispatch(showLoadingAC());
  };

  const hideLoading = () => {
    dispatch(hideLoadingAC());
  };

  return { showLoading, hideLoading };
}
