import mongoose from 'mongoose';

export default ({
  MONGO_USERNAME: user,
  MONGO_PASSWORD: password,
  MONGO_HOST: host,
  MONGO_PORT: port,
  MONGO_DB: db,
} = process.env) => {
  let url;
  if (user) {
    url = `mongodb://${user}:${password}@${host}:${port}/${db}`;
  } else {
    url = `mongodb://localhost/${db}`;
  }

  const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
    authSource: db,
  };

  return mongoose.connect(url, options);
};
