<<<<<<< HEAD
declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<any>;
=======
import { Sequelize } from "sequelize-typescript";
declare const databaseProviders: {
    provide: string;
    useFactory: () => Promise<Sequelize>;
>>>>>>> b10d18814150b384bbc2ca260f2edcb49ce9a40a
}[];
export default databaseProviders;
