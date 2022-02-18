import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'parking' })
export class Parking {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment', { unsigned: true, type: 'int' })
  id: number;

  @Field(() => String)
  @Column({ type: 'varchar' })
  adress: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  type: string;

}
