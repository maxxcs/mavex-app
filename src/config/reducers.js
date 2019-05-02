import { combineReducers } from 'redux';

import dashboard from '../dashboard/reducer';
import workspace from '../workspace/reducer';
import channels from '../channels/reducer';
import terminals from '../terminals/reducer';

const reducers = combineReducers({
  dashboard,
  workspace,
  channels,
  terminals
});

export default reducers;
