import makeExecutableSchemaFromModules from '../utils/modules';

import auth from './auth';
import skillMatrix from './skill-matrix';
import technology from './technology';

export default makeExecutableSchemaFromModules({
  modules: [auth, skillMatrix, technology],
});
