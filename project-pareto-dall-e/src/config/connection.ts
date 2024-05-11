import { Sequelize } from "sequelize-typescript";
import { Images } from "src/images/images.entity";

const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.MYSQL_HOST,
        port: 3306,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,

      });
    //   sequelize.addModels([Images]);
    //   await sequelize.sync();
      return sequelize;
    },
  },
];

export default databaseProviders;
