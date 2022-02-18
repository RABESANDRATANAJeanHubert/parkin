import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'countries' })
export class Country {
  @Field(() => Int)
  @PrimaryGeneratedColumn('increment', { unsigned: true, type: 'int' })
  id: number;

  @Field(() => String)
  @Column({ type: 'varchar' })
  country_code: string;

  @Field(() => String)
  @Column({ type: 'varchar' })
  name: string;

  @Field(() => Date)
  @Column({ type: 'date' })
  created_at: Date;

  @Field(() => Date)
  @Column({ type: 'date' })
  update_at: Date;

  @Field(() => Date)
  @Column({ type: 'date' })
  delete_at: Date;

}
