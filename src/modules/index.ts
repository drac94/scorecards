import makeExecutableSchemaFromModules from '../utils/modules';

import auth from './auth';
import skillMatrix from './skillMatrix';
import technology from './technology';

export default makeExecutableSchemaFromModules({
  modules: [auth, skillMatrix, technology],
});
