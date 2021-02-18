import { app } from './server';
import { sequelize } from './database/sequelize';

const PORT = process.env.PORT || 5000;

(async () => {
  await sequelize.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`Running on :${PORT}`);
  });
})();
