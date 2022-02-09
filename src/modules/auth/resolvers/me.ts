import { UserType } from '../../../models/user';

type Context = {
  user: UserType;
};

const me = async (_parent: any, _args: any, context: Context) => {
  const { user } = context;
  return {
    email: user.email,
    firstName: user.firstName,
    id: user.id,
    lastName: user.lastName,
    roles: user.roles,
  };
};

export default me;
