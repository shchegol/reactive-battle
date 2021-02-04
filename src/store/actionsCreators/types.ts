import { Dispatch } from 'react';
import { SnackbarAction } from '@store/actions/types';

export type DispatchSnackbar = (dispatch: Dispatch<SnackbarAction>) => void;
