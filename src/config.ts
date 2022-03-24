const { BACKEND_PORT, DB_URI, WORKERS, JWT_LIFE_TIME, JWT_SECRET } = process.env;

export default {
  JwtLifeTime: JWT_LIFE_TIME || '20m',
  JwtSecret: JWT_SECRET || '',
  MongoDbURI: DB_URI || '',
  Port: BACKEND_PORT || 5000,
  Workers: WORKERS || 1,
};
