import { compose } from '@utils/compose';
import { withMultilingual } from '@root/hocs/withMultilingual';
import { withLoading } from '@root/hocs/withLoading';
import React from 'react';

export const withAppHOCs = (WrappedComponent: React.FC) => compose(withMultilingual, withLoading)(WrappedComponent);
