import Client from '../../../models/client';

const getClients = async () => {
  return Client.find({});
};

export default getClients;
