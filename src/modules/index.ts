import makeExecutableSchemaFromModules from '../utils/modules';

import auth from './auth';
import interview from './interview';
import skillMatrix from './skill-matrix';
import technology from './technology';
import user from './user';

export default makeExecutableSchemaFromModules({
  modules: [auth, interview, skillMatrix, technology, user],
});
