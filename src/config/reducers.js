import { combineReducers } from 'redux';

import general from '@general/store/reducer';
import dashboard from '@dashboard/store/reducer';
import workspace from '@workspace/store/reducer';
import channels from '@channels/store/reducer';
import terminals from '@terminals/store/reducer';

const reducers = combineReducers({
  general,
  dashboard,
  workspace,
  channels,
  terminals,
});

export default reducers;
