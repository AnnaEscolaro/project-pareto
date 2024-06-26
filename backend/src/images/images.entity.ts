import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Images extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  prompt: string;

  @Column({ type: 'text' })
  link: string;

  @Column
  userId?: string;
}
