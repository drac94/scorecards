import makeExecutableSchemaFromModules from '../utils/modules';

import auth from './auth';
import interview from './interview';
import skillMatrix from './skill-matrix';
import technology from './technology';

export default makeExecutableSchemaFromModules({
  modules: [auth, interview, skillMatrix, technology],
});
