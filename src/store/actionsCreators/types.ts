import { Dispatch } from 'react';
import { SnackbarAction, LoadingAction } from '@store/actions/types';

export type DispatchSnackbar = (dispatch: Dispatch<SnackbarAction>) => void;
export type DispatchLoading = (dispatch: Dispatch<LoadingAction>) => void;
