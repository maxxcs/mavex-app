import { combineReducers } from 'redux';

import general from '../general/reducer';
import dashboard from '../dashboard/reducer';
import workspace from '../workspace/reducer';
import channels from '../channels/reducer';
import terminals from '../terminals/reducer';

const reducers = combineReducers({
  general,
  dashboard,
  workspace,
  channels,
  terminals
});

export default reducers;
