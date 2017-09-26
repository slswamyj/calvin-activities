const secret = require('../secret.js');

module.exports = {
  connectionString: {
    keyspace: process.env.DSE_KEYSPACE || 'testdb',
    contact: process.env.DSE_HOST || '172.17.0.1',
    port: process.env.DSE_PORT || '9042',
  },
  secretKey: secret,
  dao: process.env.DAO || 'cassandra',
  kafka: {
    host: process.env.ZOOKEEPER_HOST || '172.17.0.1',
    port: process.env.ZOOKEEPER_PORT || '2181',
    activitiesTopic: process.env.ACTIVITIES_TOPIC || 'dev_activities',
    eventsTopic: process.env.EVENTS_TOPIC || 'dev_events',
    routesTopic: process.env.ROUTES_TOPIC || 'dev_routes',
  },
  redis: {
    host: process.env.REDIS_HOST || '172.17.0.1',
    port: process.env.REDIS_PORT || '6379',
  },
  namespace: process.env.NAMESPACE_L1R || 'L1R',
  namespacemul: process.env.NAMESPACE_MULTIPLEXER || 'multiplexer',
  namespaceroutemanager: process.env.NAMESPACE_ROUTESMANAGER || 'routesmanager',
  defaultLimit: process.env.DEFAULT_CIRCLE || 5,
};
