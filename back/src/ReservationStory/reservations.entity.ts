import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'reservations' })
export class Reservation {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment', { unsigned: true, type: 'int' })
  id: number;

  @Field(() => Date)
  @Column({ type: 'date' })
  reservedAt: Date;

  @Field(() => Date)
  @Column({ type: 'date' })
  arrivedAt: Date;

  @Field(() => Date)
  @Column({ type: 'date' })
  freeAt: Date;

  @Field(() => String)
  @Column({ type: 'date' })
  givenTo: string;


}
