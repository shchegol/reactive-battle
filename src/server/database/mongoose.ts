import mongoose from 'mongoose';

export default ({
  MONGO_USERNAME: user,
  MONGO_PASSWORD: password,
  MONGO_PORT: port,
  MONGO_DB: db,
} = process.env) => {
  const url = `mongodb://${user}:${password}@mongo:${port}/${db}`;
  const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
    authSource: db,
  };

  return mongoose.connect(url, options);
};
