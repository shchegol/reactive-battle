import { createMemoryHistory, createBrowserHistory } from 'history';
import { IS_SERVER } from '@root/constants';

type HistoryParams = {
  initialEntries?: any[];
};

export const createUniversalHistory = ({ initialEntries = [] }: HistoryParams = {}) => {
  if (!IS_SERVER) {
    const history = window.browserHistory || createBrowserHistory();
    if (!window.browserHistory) {
      window.browserHistory = history;
    }
    return history;
  }
  return createMemoryHistory({ initialEntries });
};

export default createUniversalHistory;
