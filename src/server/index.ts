import { app } from './server';
import { sequelize } from './database/sequelize';
import mongooseConnect from './database/mongoose';

const PORT = process.env.PORT || 5000;

(async () => {
  await sequelize.sync({ force: true });

  mongooseConnect()
    .then(() => console.log('MongoDB is connected'))
    .catch((err: any) => console.log(err));

  app.listen(PORT, () => {
    console.log(`Running on :${PORT}`);
  });
})();
