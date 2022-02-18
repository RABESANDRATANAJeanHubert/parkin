import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'palces' })
export class Place {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment', { unsigned: true, type: 'int' })
  id: number;

  @Field(() => String)
  @Column({ type: 'varchar' })
  available: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  currentUser: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  nextUser: string;

}
