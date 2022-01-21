import makeExecutableSchemaFromModules from '../utils/modules';

import auth from './auth';
import catalogs from './catalogs';

export default makeExecutableSchemaFromModules({
  modules: [auth, catalogs],
});
