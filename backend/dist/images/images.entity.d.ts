import { Model } from 'sequelize-typescript';
export declare class Images extends Model {
    id: number;
    prompt: string;
    link: string;
    userId?: string;
}
