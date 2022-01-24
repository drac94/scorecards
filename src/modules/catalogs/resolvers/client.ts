import Client from '../../../models/client';

const getClients = async () => {
  const clients = await Client.find({});
  return clients;
};

export default getClients;
